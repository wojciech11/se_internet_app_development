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
   npm install express dotenv

   # types
   npm install -D typescript @types/express @types/node @types/dotenv ts-node
   ```

   ```bash
   npx tsc --init
   ```

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

   dotenv.config();

   const app: Express = express();
   const port = process.env.PORT;

   app.get('/', (req: Request, res: Response) => {
     res.send('Simple app');
   });

   app.listen(port, () => {
     console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
   });
   ```

5. Dodaj plik `.env` o treści, jest to plik konfiguracyjny:

   ```text
   PORT=8000
   ```

### Logowanie do konsoli

Jest kilka opcji bibliotek logowania do konsoli (i nie tylko) ponad stardowy`console.log` ([](https://blog.logrocket.com/node-js-logging-best-practices-essential-guide/)), my dzisiaj skorzystamy z `winston`.

```bash
npm install winston
```

```bash
npm install -D @types/winston
```

### Metryki

TBA

https://github.com/mnadeem/nodejs-opentelemetry-tempo

### Logowanie

https://brightinventions.pl/blog/how-to-improve-your-app-observability-easily-with-grafana-and-opentelemetry/


### Tracing

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
