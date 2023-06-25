# Bazy danych

## Express + Typescript + Knex

Tradycyjnie, nowy projekt, nowe repozytorium gita:

```bash
git clone https://... /pai_5_app.git
cd pai_5_db_app
```

## Express + Typescript

Na podstawie tutoriala dostępnego na [blogu LogRocketa](https://blog.logrocket.com/how-to-set-up-node-typescript-express/):

1. Zainstalujmy wszystkie wymagane biblioteki:

   ```bash
   npm install express knex dotenv
   ```

2. Instalacja informacji o typach:

   ```bash
   npm i -D typescript @types/express @types/node @types/knex @types/dotenv
   ```

3. Inicjalizacja:

   ```bash
   npx tsc --init
   ```

4. Przejrzyj plik `tsconfig.json` ([docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)), odkomentuj `outDir` i jako wartość ustaw `./dist`:

   ```javascript
   // ...
    "outDir": "./dist"
  // ...
   ```


5. Utwórzmy nasz `index.ts` w vscode:

   ```typescript
   import express, { Express, Request, Response } from 'express';
   import dotenv from 'dotenv';

   dotenv.config();

   const app: Express = express();
   const port = process.env.PORT;

   app.get('/', (req: Request, res: Response) => {
     res.send('Express + TypeScript Server');
   });

   app.listen(port, () => {
     console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
   });
   ```

   dla porównania ten sam plik w Javascript:

   ```javascript
   const express = require('express');
   const dotenv = require('dotenv');

   dotenv.config();

   const app = express();
   const port = process.env.PORT;

   app.get('/', (req, res) => {
     res.send('Express + TypeScript Server');
   });

   app.listen(port, () => {
     console.log(`[server]: Server is running at http://localhost:${port}`);
   });
   ```

6. Dodaj plik `.env` o treści

   ```text
   PORT=8000
   ```

   Biblioteka *dotenv* ([doc na npmjs.com](https://www.npmjs.com/package/dotenv)) czyta ten plik, aby pobrać numer portu na jakim nasza aplikacja będzie słuchała:

   ```javascript
   dotenv.config();
   // ...
   const port = process.env.PORT;

   // ...
   ```

7. Node/express pracuje na plikach w Javascript, za każdym razem jak będziemy zapisywać plik `.ts` musimy wykonać: `npx tsc`, czyli kompilację Typescript do Javascript. Zobacz co się stanie jak uruchomisz:

   ```bash
   npx tsc

   #
   ls dist/
   ```

8. Aby automatycznie kompilować nowy kod Typescript oraz zrestartować naszą aplikację, wspomożemy się dwoma narzędziami:

   ```bash
   npm install -D concurrently nodemon
   ```

9. Dodaj następujący blok do `package.json`:

   ```json
   "scripts": {
      "build": "npx tsc",
      "start": "node dist/index.js",
      "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
   }
   ```

   Przetestuj czy wszystkie komendy działają:

   ```bash
   npm run build
   npm run start
   npm run dev
   ```

10. Sprawdźmy czy wszystko działą:

    ```bash
    npm run dev
    ```

    ```bash
    # w drugim oknie:
    curl 127.0.0.1:3000
    ```

    OK. Teraz czy po zmianach się kod rekompiluje:

    1. Zmień tekst zwracany przez naszą aplikację na głównej ścieżce.

    2. Wywołaj ponownie nasze API:

       ```bash
       curl 127.0.0.1:3000
       ```

11. Zauważ, mógłbyś:

   ```bash
   node index.js
   ```

## Knex + Baza danych

1. Zainstaluj [knex](https://knexjs.org/), szczegółowe informacje znajdziesz na w [dokumentacji](https://knexjs.org/guide/#node-js):

   ```bash
   # globalnie jako narzedzie
   # linux moze wymagac sudo
   npm install -g knex
   ```

2. Inicjalizacja ([knex supports TS](https://knexjs.org/guide/#typescript)):

   ```bash
   npx knex init -x ts
   ```

3. Przanalizuj plik `knexfile.ts`. Co to jest `migration_table`? Zauważ, że masz konfigurację per środowisko (`development`, `staging` i `production`).


4. Teraz pora na skonfigurowanie knexa oraz utworzenie naszej struktury bazy danych:

   ```bash
   mkdir db
   cd db
   ```

## App 2

TBA

## Materiały dodatkowe

- [NodeJs + Express + PSQL](https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/).
