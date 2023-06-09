---
marp: true
theme: gaia
color: #000
colorSecondary: #333
backgroundColor: #fff
style: |
    section.lead h1 {
    text-align: center;
    }

---
<!-- _class: lead -->
# Programowanie Aplikacji Internetowych

Javascript / Typescript stack

---
<!-- _class: lead -->
## Plan na dziś
<br />

- Javascript
- React
- Express
- Typescript

---
<!-- _class: lead -->
## Tech Stack 2023: Frontend

1. React
2. Next.js flavoured React (the best choice)
3. Typescript

Nice summary: [blog post](https://chrlschn.medium.com/thoughts-on-react-vs-vue-vs-everything-else-in-2023-e4e50e526049)

---
<!-- _class: lead -->
## Tech Stack 2023: Backend

No one clean winner:

- Python (Flask, FastAPI, Django)
- JS/TS frameworks
- Java/C#
- Golang

<!-- https://survey.stackoverflow.co/2022/#technology -->

---
<!-- _class: lead -->
## Javascript

- Lightweight and interpreted,
- just-in-time compiled,
- first-class functions,
- imperative, and declarative (e.g. functional programming) styles;
- ECMAScript.

[więcej na developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript)

---
<!-- _class: lead -->
## Nodejs

- Node.js to otwarto źródłowe i między platformowe środowisko uruchomieniowe dla języka JavaScript;
- Oparte jest o silnik wykonywania kodu JavaScript o nazwie V8;

---
<!-- _class: lead -->
## npm

- manager pakietów;
- najlepiej zarządzać z pomocą [nvm](https://github.com/nvm-sh/nvm);
- `npx` - package executor.

---
<!-- _class: lead -->
![](https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png)

---
<!-- _class: lead -->
## Express

- Fast server-side development;
- Middleware;
- Routing;
- Templating.

---
<!-- _class: lead -->
## Express - helloworld

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

---
<!-- _class: lead -->
## Express

- Struktura wygenerowanego projektu:

  ```javascript
  npx express-generator  --view=pug myapp
  ```

- `app.js`, `routes/`, `public/` i `views/`.

---
<!-- _class: lead -->
## Express

- [routes](https://expressjs.com/en/guide/routing.html);
- [template engines](https://expressjs.com/en/guide/using-template-engines.html);
- [static](https://expressjs.com/en/starter/static-files.html).

---
<!-- _class: lead -->
# React

![width:400px](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

---
<!-- _class: lead -->
## React

Benefits:

- JSX - JSX is a syntax extension to JavaScript with react;
- Virtual Document Object Model (DOM) - This defines how documents are accessed and manipulated on a web page;
- Performance - There are several ways to speed up the react application by using virtual DOM because it reduces the re-render time;
- One-way data-binding - Information flows in one direction.

---
<!-- _class: lead -->
## React

- React Props
- ReactJS State
- ReactJS Components
- React with Redux

---
<!-- _class: lead -->
## Typescript

- TypeScript is JavaScript with syntax for types;
- `npm install @types/http`.

---
<!-- _class: lead -->
## Dziękuję za uwagę
<br />

---
<!-- _class: lead -->
# Backup slides
