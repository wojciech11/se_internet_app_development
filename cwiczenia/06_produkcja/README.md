# Aplikacja w produkcji

## Testowanie i linting (TBA)

- unit tests
- handler testing
- https://playwright.dev
- https://storybook.js.org (np. z https://www.chromatic.com)

## Uruchomienie w Dockerze

Dlaczego opakowujemy naszą aplikację Dockerem?

Zbiór najlepszych praktyk: [przykłady](https://github.com/wojciech12/workshop_kubernetes_and_cloudnative/tree/master/00_docker)

## Observability

W tym ćwiczeniu zbudujemy prostą aplikację dla zilustrowania observability, tylko, żeby zasygnalizować temat monitoringu, logowania i tracingu.


1. Tradycyjnie, nowy projekt, nowe repozytorium gita:

   ```bash
   git clone https://... /pai_6_prod.git
   cd pai_6_prod
   ```

2. Przygotowanie aplikacji, ponownie będziemy używać Typescripta:

   ```bash
   # biblioteki
   npm install express dotenv cors

   # types
   npm install -D typescript @types/express \
       @types/node @types/dotenv @types/cors \
       ts-node
   ```

   ```bash
   npx tsc --init
   ```

   Do czego służy biblioteka [cors](https://expressjs.com/en/resources/middleware/cors.html)?

3. Automatyzacja - automatycznej kompilacji i restart serweru w dev, kiedy zmieniasz plik Typescript, tak jak było na ostatnich ćwiczeniach:

   W `tsconfig.json`, usuń komentarz sprzed `outDir` i jako wartość ustaw `./dist`:

   ```javascript
   // ...
   "outDir": "./dist"
   // ...
   ```

   Narzędzia do automatycznej kompilacji i restartu:

   ```bash
   npm install -D concurrently nodemon
   ```

   Dodaj następujący blok do `package.json`:

   ```json
   "scripts": {
      "build": "npx tsc",
      "start": "node dist/index.js",
      "dev": "NODE_ENV=development concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
   }
   ```

4. Zacznijmy od prostej aplikacji `index.ts`:

   ```typescript
   import express, { Express, Request, Response } from 'express';
   import dotenv from 'dotenv';
   import cors from 'cors';

   dotenv.config();

   const app: Express = express();
   const port = process.env.PORT;

   app.use(cors());
   app.use(express.json())

   app.get('/', (req: Request, res: Response) => {
     res.json({ method: req.method, message: "Hello World", ...req.body });
   });

   app.listen(port, () => {
     console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
   });
   ```

5. Dodaj plik `.env` o treści, jest to plik konfiguracyjny:

   ```text
   PORT=8000
   ```

### Lepsze logowanie do konsoli

Jest kilka opcji bibliotek logowania do konsoli (i nie tylko) ponad standardowy `console.log` ([](https://blog.logrocket.com/node-js-logging-best-practices-essential-guide/)), my dzisiaj skorzystamy z `pino` (jest dostępny również [pino middleware](https://github.com/pinojs/pino/blob/master/docs/web.md#pino-with-express)).

```bash
npm install pino
```

```bash
npm install -D @types/pino
```

Dorzućmy logowanie:

```typescript
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pino from 'pino'; // (1)

dotenv.config();

const logger = pino({ // (2)
     name:   'order-mgmt-app',
     level: 'info'
});

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
     logger.info({'handler': '/'}, "Calling the main") // (3)
     res.json({ method: req.method, message: "Hello World", ...req.body });
});

app.listen(port, () => {
     logger.info(`⚡️[server]: Server is running at http://localhost:${port}`); // (4)
});
```

Biblioteki do logowania pozwalają nam dodawać dodatkowe informacje w ustrukturyzowany sposób (dodanie request id) oraz dbają o właściwy format.

### Metryki

Lepsze logowanie do konsoli oraz dodanie metryk z Prometheusem są pierwszymi krokami dla implementacji observability niezależnie czy jest to Typescript, Python czy Golang. Dla Nodejs, integrację z Prometheusem znajdziesz na [siimon/prom-client](https://github.com/siimon/prom-client).

### Open Telemetry

[OpenTelemetry](https://opentelemetry.io/) obiecuje nam, że w ramach jednej biblioteki możemy mieć wsparcie dla tracingu, metryk i logowania (ostatnio dodane).

Wykorzystajmy OpenTelemetry w naszej aplikacji:

1. Zainstalujmy biblioteki/plugin dla [expressa](https://github.com/open-telemetry/opentelemetry-js-contrib/tree/main/plugins/node/opentelemetry-instrumentation-express#readme), dla porównania jak wygląda [instrumentacja aplikacji nodejs](https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/).

   ```bash
   npm install --save @opentelemetry/instrumentation-http \
                      @opentelemetry/instrumentation-express \
                      @opentelemetry/sdk-node
   ```

   Podepniemy do naszej aplikacji OTEL, utwórz następujący plik:  `instrumentation.ts`:

   ```Typescript
   import { NodeSDK } from '@opentelemetry/sdk-node';
   import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';
   import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
   import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';

   import { PeriodicExportingMetricReader, ConsoleMetricExporter } from '@opentelemetry/sdk-metrics';

   const sdk = new NodeSDK({
     traceExporter: new ConsoleSpanExporter(),
     metricReader: new PeriodicExportingMetricReader({
       exporter: new ConsoleMetricExporter()
     }),
     instrumentations: [new HttpInstrumentation(), new ExpressInstrumentation()]
   });

   sdk.start()
   ```

2. Zmodyfikuj `package.json`, żeby nasz kod dla observability z OTEL był ładowany przy każdym starcie aplikacji:

  ```json
  //...
  "dev": "NODE_ENV=development concurrently \"npx tsc --watch\" \"nodemon --require ./dist/instrumentation.js -q dist/index.js\""
  // ...
  ```

3. Zobaczmy OTEL w działaniu:

   - dla traceingu, używany `ConsoleSpanExporter`;
   - dla metryk, okresowo wypisujemy na konsole z `PeriodicExportingMetricReader` i `ConsoleMetricExporter`.

   W jednym z okien konsoli uruchom aplikację:

   ```bash
   npm run dev
   ```

   w drugim:

   ```bash
   curl http://localhost:8080/
   ```

   Zauważ:

   - metryki - co jakis czas raportowane
   - oraz tracing

4. Moglibyśmy również wstrzyknąć informację z tracingu do logów, instrukcja ze [dokumentacji sumologic](https://help.sumologic.com/docs/apm/traces/get-started-transaction-tracing/opentelemetry-instrumentation/javascript/traceid-spanid-injection-into-logs/), pokazuje jak. Dla `pico` i innych popularnych bibliotek mamy integrację z OTEL, dla `pico` to `@opentelemetry/instrumentation-pino`.

5. Jako, że mamy wszystko działajace, zobaczmy korzystać z tracingu w heandlerze:

   ```bash
   ```

#### Metryki

TBA

https://github.com/mnadeem/nodejs-opentelemetry-tempo

#### Tracing

https://brightinventions.pl/blog/how-to-improve-your-app-observability-easily-with-grafana-and-opentelemetry/

### Logowanie

https://brightinventions.pl/blog/how-to-improve-your-app-observability-easily-with-grafana-and-opentelemetry/


## Session recording (Dodatkowe)

Dobrym przykładem jest [logrocket.com](https://logrocket.com).

## Kierunek: Continuous Deployment (do domu 1)

Jako zadanie do domu, proszę zbudować github workflow lub GitlabCI do automatycznego lintowania i testwania.

## Zadanie Dodatkowe (do domu 2) - next.js

Większość czasu, spędziliśmy pisząc aplikację posługując się expressjs. W poprzednim ćwiczeniu, mieliśmy okazję zbudować aplikację korzystającą z Typescript, teraz pora poznać nextjs.

## Zadanie Dodatkowe (do domu 3)

https://vitejs.dev -

## Security

Zapoznaj się z:

- [OWASP Secure Coding Practices-Quick Reference Guide](https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/).

## Materiały

- [Budowa i administacja aplikacji w chmurze](https://github.com/wojciech11/se_cloud_app_administration_and_development).
