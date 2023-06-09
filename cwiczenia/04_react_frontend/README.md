# Frontend with React

## React Podstawy

1. Zapoznaj się z przykładem [react](react/), zauważ, że można korzystać z reakta i eksperymentować z poziomu strony internetowej;

2. Przejdź przez tutorial 1 dostępny na [react.dev](https://react.dev/learn).

## React App 1

Ćwiczenie jest w oparciu o getting-started-with-react tutorial na [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started).

1. Utwórz repozytorium na githubie - `pai_4_react`:

   ```bash
   # tak jak zawsze zaczynamy
   # prace w tym samym katalogu
   cd ~/workspace
   git clone https://... /pai_4_react.git
   ```

2. Skorzystajmy z generatora, dla utworzenia aplikacji react:

   ```bash
   npx create-react-app
   ```

3. Przejrzyjmy się wygenerowanej strukturze plików wraz z prowadzącym zajęcia.

4. Teraz przejdźmy przez strukturę następujących plików:

   ```mermaid
   flowchart LR
    App(src/App.js) --> Ijs(src/index.js) --> Ihtml(public/index.html)
   ```

   - `src/App.js` - App component;
   - `src/index.js` - index.

5. Przygotuj swoje środowisko do pracy:

   1. code z terminalem ([doc](https://code.visualstudio.com/docs/terminal/basics));
   2. W terminalu uruchom aplikację: `npm start`;
   3. Przeglądarkę na `localhost:3000`.

6. W `src/App.js` usuń wszystko poniżej elementu `img` w obrębie `header`. Dodaj paragraph z tekstem <i>Hello, Natalio!</i>.

   ```jsx
   function App() {
      const subject = "React";
      return (
        <div className="App">
           <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
          <p>Hello, Natalio!</p>
        </header>
       </div>
     );
   }
   ```

### Zmienne (Variables) w JSX

7. Teraz skorzystajmy ze zmiennej do zdefiniowania kogo będziemy witać:

   ```jsx
   function App() {
      const subject = "Natalia";
      return (
        <div className="App">
           <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
          <p>Hello, {subject}!</p>
        </header>
       </div>
     );
   }
   ```

### Components Props

Zobaczmy teraz jak możemy wykorzystać props komponentów.

8. Będziemy chcieli teraz zdefiniować imię z poziomu `src/index.js`:

   ```jsx
   root.render(<App subject="Karolina" />);
   ```
9. Zanim coś zmienimy, zobaczmy co nas komponent dostaje od komponentu nadrzędnego:

   ```jsx
   function App(props) {
      // dodaj logowanie:
      console.log(props);
      return (
         // return statement
      );
   }
   ```

   Po zapisaniu, przeładuje się przeglądarka.

10. Otwórz *Web Developer Tools* -> *Console*, aby zobaczyć jak wygląda obiekt `props`.

11. Ostatnim krokiem jest wykorzystanie props w wyświetlanym powitaniu:

    ```jsx
    function App(props) {
      const subject = props.subject;
      return (
      // return statement
      );
    }
    ```

12. Po upewnieniu się, że wszystko działa, umieść aplikację na githubie.

## React App 2

1. 


## React + Tailwindcss

1. VITE

2. Tailwindcss - https://tailwindcss.com/docs/guides/create-react-app

3. TBA

## React + Tailwind + Express

1. Utwórz repozytorium `pai_4_app` na githubie, będziemy tam umieszczać naszą aplikację:

   ```bash

   # wroc do katalogu domowego
   cd

   # workspace
   cd workspace

   # clone!
   git clone https://... /pai_4_app.git
   cd pai_4_app
   ```

3. Wygenerujmy kod dla react app:

   ```bash
   create-react-app client

   # podążając za wskazówkami
   ```

4. Skorzystamy z generatora do utworzenia szkieletu naszej aplikacji:

   ```bash
   mkdir server
   cd server

   npx express-generator

   # podążając za wskazówkami
   npm install
   ```

## JS -> Typescript

xyz

## VITE

xyz

## Materiały dodatkowe

- https://www.react.express/
