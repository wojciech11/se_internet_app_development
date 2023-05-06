# CSS/Component frameworks

## CSS

Uwaga: po każdej zmianie odśwież stronę, wykorzystaj Developer tools, aby zobaczyć jak wygląda ostateczne reguły CSS.

0. W katalogu `workspace` (patrz [przygotowanie](../README.md)), utwórz katalog `pai_2_css`.

1. W katalogu `pai_2_css`, utwórz podstawową stronę `index.html` z podstawową strukturą (elementy: head, body, oraz nagłówek).

2. Aby oczarować klienta, dodajmy następującą treść do naszej strony www:

   ```html
   <h1><p>Hello</p></h1>

   <h2><p>World!</p></h2>

   <h3>WSB</h3>
   ```

3. Dodaj css, który (selektor po elemencie), każdemu tekstowi nada kolor *niebieski*.

4. Dodaj css, który nada kolor teksowi *czerwony*, jeśli tekst znajduje się w `h2`.

5. Dodaj css, który nad kolor tekstowi *zielony*, jeśli znajduje się w `h3`.

6. Wykorzystaj `id`, dla nadania tekstowi poniżej `h3`, kolor *żółty*.

7. Zmień wszystkie reguły css na klasy.

## Reveljs

1. Przygotuj 5 slajdową prezentację z wykorzystaniem [reveal.js](https://github.com/hakimel/reveal.js);

2. Umieść wszystkie plik w repozytorium `pai_2_revealjs`.

## Bootstrap

1. Zrób tutorial getting-started - https://getbootstrap.com/docs/5.2/getting-started/introduction/.

2. Dodaj do przykład [bootstrap](bootstap/), kilka komponentów, np., checks & radios, form control, oraz dowolny komponent.

3. Po każdej modyfikacji, zobacz jak zmienia się strona.

## Revealjs + Bootstrap

Dodaj do prezentacji slajd, w którym będziesz miał następujący layout, wykorzystaj w tym celu bootstap ([grid](https://getbootstrap.com/docs/5.0/layout/grid/)):

```
| logo wsb | text
| text  | logo WKS
```

oraz

```
|         text        |
| logo wsb | logo wsb |
```

Po ukończeniu ćwiczenia, umieść zmiany na repozytorium git.

## Tailwindcss

Teraz poznajmy, popularną (i **rekomendowanym**) frameworkiem CSS - [tailwindcss](https://tailwindcss.com/). Przejdź do katalogu z prostym projektem [tailwindcss](tailwindcss/), gdzie znajdziesz instrukcję.

## Revealjs + Tailwindcss

Zmień implementację, grid z bootstrap na z wykorzystaniem Tailwindcss.

Po ukończeniu ćwiczenia, umieść zmiany na repozytorium git -  `pai_2_revealjs`.

## Materiały dodatkowe:

- [tailwindcss vs bootstap by logrocket](https://blog.logrocket.com/comparing-tailwind-css-bootstrap-time-ditch-ui-kits/);
- [Lista CSS Frameworks](https://dev.to/theme_selection/best-css-frameworks-in-2020-1jjh);
- [Figma kit for Tailwindcss](https://www.figma.com/community/file/768809027799962739/Tailwind-CSS-UI).
