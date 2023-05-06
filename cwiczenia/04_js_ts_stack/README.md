# JS/TS stack

## Pierwsze kroki z express.js

W oparciu o tutorial na [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)

1. Utwórz repozytorium `pai_4_js_start` na githubie, będziemy tam umieszczać naszą aplikację:

   ```bash
   git clone ŚCIEŻKA_DO_TWOJEGO_REPOZYTORIUM
   cd pai_3_js_example

   # pierwszy krok to zawsze README.md
   touch README.md
   git add README.md
   git commit -m init
   git push -u master master
   ```

2. Zainistowanie `npm`, nazwa `hello_world_app`:

   ```bash
   npm init
   ```

   Przejrzyj zawartość pliku `package.json`.

   ```bash
   cat package.json
   ```

3. Zainstalowanie express:

   ```bash
   npm install express
   ```

   co się zmieniło w `package.json`? Do czego służy `package-lock.json`?

4. Utwórz `index.js`:


   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   app.get("/", (req, res) => {
       res.send("Hello World!");
   });

   app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`);
   });
   ```

5. Zobaczmy czy nasz aplikacja dziala:

   ```bash
   node index.js
   ```

6. Teraz zadbajmy o to, abyśmy mieli zainstalowany linter:


   ```bash
   npm install eslint --save-dev
   ```
   
   Co to jest linter?

7. Aby mieć dostępnego lintera jako komendę, dodaj do `package.json`:

   ```json
   "scripts": {
   		// ...
   		"lint": "eslint src/js"
   		// ...
   }
   ```

8. Możemy teraz uruchomić lintera:

   ```bash
   npm run lint
   ```

9. Wrzuć wszystko do repozytorium git.

## Generatory szkieletu aplikacji na przykładzie express

Większość frameworków posiada generatory aplikacji, pozwala to szybko zacząć pracę z danym narzędziem. Zobaczmy jako to działa

0. Wyjdź z katalogu gdzie mieliśmy naszą pierwszą aplikację o zera utworzoną.

   ```bash
   cd ..

   ls
   ```

1. Zainstalujmy generator:

   ```bash
   npm install express-generator -g
   ```

2. Wygeneruj aplikację:

   ```bash
   express helloworld   
   ```

3. Po przejściu do katalogu `helloworld`, przejrzyj plik `cat package.json`.

4. Podążając za wskazówkami generatora, zainstaluj dependencies:

   ```bash
   npm install
   ```

5. Czas uruchomić naszą aplikację:

   ```bash
   DEBUG=helloworld:* npm start
   ```

## Rozbudowanie przykładu - routers

Dodajmy teraz endpoint `/hello`, który będzie nam zwracał `world!`.

1. W katalogu `routes/`, dodaj plik `hello.js`, który będzie naszym routerem obsługującym rządanie pod ścieżką `/hello`:

   ```javascript
   var express = require('express');
   var router = express.Router();

   router.get('/', function(req, res, next) {
       res.send('World!');
    });

    module.exports = router;
   ```

2. Teraz musimy zintegrować z główną aplikację, dodaj następujący kod w `app.js`:

   ```javascript

   // ...
   var indexRouter = require('./routes/index');
   var usersRouter = require('./routes/users');
   
   var helloRouter = require('./routes/hello'); // nasz router

   // ...
   ```

   ```javascript
   // ...

   app.use('/', indexRouter);
   app.use('/users', usersRouter);
   app.use('/hello', helloRouter); // mapowanie sciezki na router

   // ...
   ```

3. Czas uruchomić naszą aplikację:

   ```bash
   DEBUG=helloworld:* npm start
   ```

   w przeglądarce otwórz `http://127.0.0.1:3000/hello/`.

4. A co byśmy musieli zrobić, aby wyświetlić `hello`, kiedy użytkownik otworzy `http://127.0.0.1:3000/hello/witam`?

5. Na podstawie dokumentacji - https://expressjs.com/en/guide/routing.html - zaimplementuj następującą funcjonalność:

   1. Kiedy otwieram `http://127.0.0.1:3000/hello/natalia`, powinienem zobaczyć `witaj Natalia!`;

   2. Kiedy otwieram `http://127.0.0.1:3000/hello?name=michal`, powinienem zobaczyć `witaj Michal!`;

6. Wrzuć swoją aplikację do githuba, repo: `pai_4_js_example`.

## Rozbudowa aplikacji - statyczne pliki

Serwowanie statycznych plików - https://expressjs.com/en/starter/static-files.html

## Rozbudowa aplikacji - template engineers

Aby wygenerować stronę html, serwowaną do klienta, musimy nauczyć się jak korzystać z [templetów](https://expressjs.com/en/guide/using-template-engines.html). 

1. Domyślnie generator daje nam wsparcie dla jade, znajdź następujące linie w `app.js`:

   ```javascript
   // view engine setup
   app.set('views', path.join(__dirname, 'views'));
   app.set('view engine', 'jade');
   ```

2. Na zasadzie analogii do generacji strony startowej w routerze `index.js`, dodaj stronę `/about`.

## Zaawansowane - Co to jest middleware

- https://expressjs.com/en/guide/writing-middleware.html

## React

1. Zapoznaj się z przykładem [react](react/), zauważ, że można korzystać z reakta i eksperymentować z poziomu strony internetowej

2. Przejdź do tutoriala na [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started).

<!-- 
Jeśli byśmy chcieli używać Typescript - https://blog.logrocket.com/how-to-set-up-node-typescript-express/
-->

<!-- 0. [mdn on frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction).

1. React

2. JS/TS

3. Next.js -->

## Materiały dodatkowe

- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
