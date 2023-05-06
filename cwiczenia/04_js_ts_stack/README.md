# JS/TS stack

1. Upewnij się, że masz zainstalowane [nvm](https://github.com/nvm-sh/nvm) oraz [node w wersji LTS](https://github.com/nvm-sh/nvm#long-term-support).

2. Upewnij się, że masz zainstalowany twój ulubiony edytor, rekomendacje, jeden z nich:
  
   - [pulsar](https://github.com/pulsar-edit/pulsar),
   - [VSCodium](https://github.com/VSCodium/vscodium) lub [vscode](https://code.visualstudio.com/docs/setup/linux#_snap),
   - [JetBrains Fleet](https://www.jetbrains.com/fleet/download/#section=linux),
   - czy też [neovim](https://neovim.io/) :).

3. Utwórz katalog `workspace` w folderze głównym użytkownika, którego będziesz używał w czasie ćwiczeń.

   ```bash
   #
   cd

   mkdir -p workspace

   cd workspace

   # upewnijmy się, że jesteśmy we właściwym
   # katalogu
   pwd

   # powinnaś / powinienes zobaczyc:
   #   /home/<your-username>/workspace

   ```

## Pierwsze kroki z express.js

W oparciu o tutorial na [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)

1. Utwórz repozytorium `pai_js_example` na githubie, będziemy tam umieszczać naszą aplikację:

   ```bash
   git clone ŚCIEŻKA_DO_TWOJEGO_REPOZYTORIUM
   cd pai_js_example

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

2. 






Jeśli byśmy chcieli używać Typescript - https://blog.logrocket.com/how-to-set-up-node-typescript-express/



<!-- 0. [mdn on frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction).

1. React

2. JS/TS

3. Next.js -->


## Materiały dodatkowe

- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
