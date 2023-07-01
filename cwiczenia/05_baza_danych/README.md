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
   npm install -D typescript @types/express @types/node @types/knex @types/dotenv ts-node
   ```

3. Inicjalizacja:

   ```bash
   npx tsc --init
   ```

4. Przejrzyj plik `tsconfig.json` ([docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)), usuń komentarz sprzed `outDir` i jako wartość ustaw `./dist`:

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
      "dev": "NODE_ENV=development concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
   }
   ```

   Zauważ `NODE_ENV` (patrz [dokumentacja nodejs](https://nodejs.dev/en/learn/nodejs-the-difference-between-development-and-production/)), pamiętaj najlepszą praktyką jest podawanie [konfiguracji przez zmienne środowiskowe](https://12factor.net/config), a nie uczenie aplikacji co to znaczy dev czy staging.

10. Przetestuj czy wszystkie komendy działają:

    ```bash
    npm run build
    npm run start
    npm run dev
    ```

11. Sprawdźmy czy nasza aplikacja działa:

    ```bash
    npm run dev
    ```

    ```bash
    # w drugim oknie:
    curl 127.0.0.1:3000
    ```

    OK. Teraz zobaczmy czy automatycznie po zmianie pliku, kod skompiluje i aplikacja zrestartuje:

    1. Zmień tekst zwracany przez naszą aplikację na głównej ścieżce.

    2. Wywołaj ponownie nasze API:

       ```bash
       curl 127.0.0.1:3000
       ```

11. Zauważ, mógłbyś:

   ```bash
   ls dist/

   node dist/index.js
   ```

## Knex + Baza danych

Zauważ: rozbudowany tutorial dla JS, znajdziesz na tym [blogu](https://medium.com/cbazil-dev/setting-up-a-simple-standard-knex-express-restful-api-with-postgresql-b4a62244520d).

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


4. Zaimportujmy konfigurację knexa w naszej aplikacji oraz dodaj logowanie wybranej konfiguracji:  

   ```typescript
   import express, { Express, Request, Response } from 'express';
   import dotenv from 'dotenv';
   import  * as knexConfigs from './knexfile'; // (1)

   dotenv.config();

   const app: Express = express();

   const port = process.env.PORT;


   const envName = process.env.NODE_ENV || 'development'; // (2)
   const knexCfg = knexConfigs[envName]; // (3)
   console.log(knexCfg) // (4)

   app.get('/', (req: Request, res: Response) => {
      res.send('Express + TypeScript Server with db: ' + knexCfg["client"]); // (4)
   });

   app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
   });
   ```

5. Utwórzmy plik do migracji, niezapomnij zainstalować biblioteki do pracy z [sqlite3](https://www.sqlite.org) ([docs](https://knexjs.org/guide/#node-js)), czyli bazy danych, którą chcemy używać w środowisku dev.

   **Pamiętaj**: nie korzystaj z różnych baz na różnych środowiskach!

   ```bash
   npm install sqlite3 // !!

   knex migrate:make default -x ts
   ```

   Zauważ, że został utworzony nowy katalog - `migrations`, przejrzyj zawartość nowego katalogu.

6. Teraz czas utworzyć tabele, naszym celem jest aplikacja do zarządzania samochodami dla pracowników:

   ```mermaid
   flowchart LR
    TE(Employee) -- 1:N --> TC(Cars)
   ```

   Utwórzmy dwie tabele, w pliku ` migrations/20230627164951_default.ts`, dodaj dwa polecenia dla utworzenia tabeli `employee` i `car` (a propos, [plural vs singular table names](https://dba.stackexchange.com/questions/13730/plural-vs-singular-table-name)):

   ```typescript
   import { Knex } from "knex";

   export async function up(knex: Knex): Promise<void> {
     await knex.schema.createTable("employee", (table) => {
       table.increments("id").primary().unique();
       table.string("employee_number").notNullable().unique();
       table.string("first_name").notNullable();
       table.string("surname").notNullable();
       table.timestamps(true, true);
     });

     await knex.schema.createTable("car", (table) => {
       table.increments("id").primary().unique();
       table.string("number_plate").notNullable().unique();
       table.string("description").notNullable();
       table.string("mileage").notNullable();
       table.string("alias");
       table.integer("employee_id").references("id").inTable("employee");
       table.timestamps(true, true);
     });
   }

   export async function down(knex: Knex): Promise<void> {
     return knex.schema.dropTableIfExists("car").dropTableIfExists("employee");
   }
   ```

   Warto znać: [Knex cheatsheet](https://devhints.io/knex).

7. Utwórzmy teraz tabele, uruchamiając migracje:

   ```bash
   npx knex  migrate:latest
   ```

   Zauważ, na stagingu byśmy uruchomili:

   ```bash
   NODE_ENV=staging npx knex migrate:latest
   ```

   Zobaczmy:

   ```bash
   sqlite3 dev.sqlite3

   sqlite> . tables
   sqlite> select * from car
   ```

8. Seed file allows you to add data into your database without having to manually add them:

    ```bash
    knex seed:make employee --knexfile knexfile.ts -x ts
    knex seed:make car --knexfile knexfile.ts -x ts
    ```

    Zacznijmy pliku seed dla tabeli `employee`, uzupełnij `seeds/employee.ts` według poniższego przykładu:

    ```typescript
    import { Knex } from "knex";

    export async function seed(knex: Knex): Promise<void> {
      // Deletes ALL existing entries
      await knex("employee").del();

      // Inserts seed entries
      await knex("employee").insert([
        {
          id: 1,
          employee_number: "D7992",
          first_name: "Natalia",
          surname: "Kowalska",
        },
        { id: 2, employee_number: "D7991", first_name: "Weronika", surname: "Kot" },
        { id: 3, employee_number: "D7990", first_name: "Tomasz", surname: "Kowal" },
      ]);
    }
    ```

    Zacznijmy pliku seed dla tabeli `car`, uzupełnij `seeds/car.ts` według poniższego przykładu:

    ```typescript
    import { Knex } from "knex";

    export async function seed(knex: Knex): Promise<void> {
      // Deletes ALL existing entries
      await knex("car").del();

      // Inserts seed entries
      await knex("car").insert([
        {
          id: 1,
          number_plate: "DW888",
          description: "",
          mileage: 10,
          alias: "",
          employee_id: 1,
        },
        {
          id: 2,
          number_plate: "DW777",
          description: "",
          mileage: 12,
          alias: "",
          employee_id: 2,
        },
        {
          id: 3,
          number_plate: "DW444",
          description: "",
          mileage: 15,
          alias: "",
          employee_id: 3,
        },
      ]);
    }
    ```

    Dodamy od razu komendę do `package.json`, abyśmy nie musieli wpisywać jej za każdym razem:

    ```javascript
    "seed": "knex seed:run --knexfile knexfile.ts"
    ```

    Teraz, wystarczy uruchomić:

    ```bash
    npm run seed
    ```

    Zobaczmy czy dane są w bazie danych:

    ```bash
    sqlite3 dev.sqlite3

    sqlite> . tables
    sqlite> select * from car
    ```

9. Wróćmy do naszej aplikacji:

   ```typescript
   import express, { Express, Request, Response } from 'express';
   import dotenv from 'dotenv';
   import Knex from 'knex';
   import  * as knexConfigs from './knexfile';

   dotenv.config();

   const app: Express = express();

   const port = process.env.PORT;

   const envName = process.env.NODE_ENV || 'dev';

   console.log(knexConfigs)

   const knexCfg = knexConfigs[envName]
   console.log(knexCfg)

   const knex = Knex(knexCfg) // (1)

   app.get('/', (req: Request, res: Response) => {
     res.send('Express + TypeScript Server hahah' + knexConfig["client"]);
   });

   app.get('/employees', (req: Request, res: Response) => { // (2)
     knex.select().from("employee").then((empls) => {
       res.send(empls)
     })
   });

   app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
   });
   ```

   Przetestuj:

   ```bash
   curl 127.0.0.1:3000/employees
   ```

10. Dodaj endpoint: `/cars`.

11. Dodaj endpoint do wyświetlania szczegółów pojedynczego pojazdu: `cars/{id}':

12. Jeśli dobrze Tobie poszło, z poprzednimi punkami, dodaj endpointy CRUD do zarządzania zarówno pracownikami jak i przydzielonymi im samochodzami.

13. Zapoznaj się z [najlepszymi praktykami dla expressjs w produkcji](https://expressjs.com/en/advanced/best-practice-performance.html).

14. Bardziej złożony przykład znajdziecie na [medium](https://medium.com/cbazil-dev/setting-up-a-simple-standard-knex-express-restful-api-with-postgresql-b4a62244520d) i [githubie](https://github.com/cdellacqua/express-knex-typescript-template) oraz [CRUD REST API with Node.js, Express, and PostgreSQ](https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/).

<!--
https://stackoverflow.com/questions/57500089/how-to-configure-knex-ts-in-typescript-project
-->

## Właściwa struktura Web app

Naszym celem będzie omówienie najlepszych praktyk:

1. Rozbicie programu na logiczne części;

2. Omówimy [dependency injection](https://wiki.c2.com/?DependencyInjection) do zaimplementowania IoC (Inverse of Control) i korzyści związane z tym wzorcem projektowym.

Wróćmy do naszego poprzedniego programu, pierwszym krokiem będzie....

## Zadanie domowe

1. Napisz aplikację, na zasadzie analogi do poprzedniego przykładu, do zarządzania koszykiem (jak w sklepie):

   - koszyk:

     - składa się z pozycji

   - pozycje koszyka:

     - wartość jednej jednostki
     - ilość rzeczy
    - jednostka miary

2. W drugiej iteracji: read dla koszyka powinien również podawać pełną wartość koszyka poprzez zsumowanie wszystkich pozycji.

3. Dodaj promocje w kodzie, nie na poziomie bazy danych, zacznij od 3 sztuki mleka, 1 za darmo. Wartość koszyka >100PLN, to 10% taniej.

   Jeśli spodoba Tobie się to ćwiczenie, [tutaj znajdziesz więcej pomysłów](http://codekata.com/kata/kata01-supermarket-pricing/).

4. Czwarta iteracja - popatrz na strukturę kodu i pamiętając o IoC, jak można ją logicznie rozdzielić?

5. Czwarta/Piąta iteracja, (1) napisz testy do logiki promocji oraz (2) do działania web API.

## Express + Prisma

To ćwiczenie jest zrobione w oparciu o oficjalny przykład wykorzystania [prisma z expressjs](https://www.prisma.io/express) i [tutoriala](https://www.prisma.io/typescript), oraz kod jest w [githubie](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express).

1. Uruchom według wskazówek na [github.com/prisma/prisma-examples/tree/latest/typescript/rest-express](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express):

   ```bash
   npx try-prisma@latest --template typescript/rest-express

   // i tak dalej
   ```

2. TBA

## Materiały dodatkowe

- [12factor app](https://12factor.net).
