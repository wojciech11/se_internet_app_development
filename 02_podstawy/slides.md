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

Podstawy

---
<!-- _class: lead -->
## Plan na dziś
<br />

- HTML
- CSS
- DNS
- HTTP
- REST

---
<!-- _class: lead -->
## HTML
<br />

- Co warto wiedzieć?

---
<!-- _class: lead -->
## HTML

Skorzystajmy Najpierw z Web Developer Tools w Firefoxie

![Firefox logo](https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg)

---
<!-- _class: lead -->
## HTML
<br />

- Tim Berners-Lee
- HTML5
- [podstawowa struktura](https://www.w3schools.com/html/default.asp)

---
<!-- _class: lead -->
## HTML

- [tagi otwierające i zamykające](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [atrybuty](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#attributes)
- \<br /\>

---
<!-- _class: lead -->
## HTML

- \<a href="https://..."\>link do \</a\>
- \<img src="" /\>
- \<p>123</p\>
- \<h2></h2\>

---
<!-- _class: lead -->
## HTML

[Listy](https://www.w3schools.com/html/html_lists.asp):

- \<ul\> oraz \<ol\>
- \<li\>

---
<!-- _class: lead -->
## HTML

[Kontenery](https://www.w3schools.com/html/html_blocks.asp):

- \<div\> - kontener
- \<span\> - inline


---
<!-- _class: lead -->
## HTML

- \<script\>
- [forms](https://www.w3schools.com/html/html_forms.asp)

---
<!-- _class: lead -->
## HTML - Praktyka

- [Responsive design](https://www.w3schools.com/html/html_responsive.asp),
- [Responsive typography](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design#responsive_typography),
- [media queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries).

---
<!-- _class: lead -->
## HTML - Praktyka

Jeśli nie mamy możliwości budowy frontendu:

- prezentacje z [revealjs](https://revealjs.com/) ([przykład](https://github.com/wojciech11/cloud_dev_tools_and_platforms/tree/master/01_slides)),
- blog na wordpress lub na alterntywnej platformie,
- Warto skorzystać z gotowych komponentów, np., [bootstrap](https://getbootstrap.com/docs/5.3/layout/containers/).

---
<!-- _class: lead -->
## CSS

- CSS - Cascading Style Sheets
- [przykład](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)

---
<!-- _class: lead -->
## CSS - Reguły

```css
selektor { cecha: wartość; }
```

- selektor - dowolny znacznik, np. p (akapit), h1 (nagłówek), li (lista) cecha - właściwość stylu dla znacznika, np. kolor (color)
- wartość - opis cechy np. kolor czcionki (color) czerwony (red)

```css
p { color: red; }
```
---
<!-- _class: lead -->
## CSS - Reguły

```css
h1 p { color: red; }
```

element `p` w `h1`.

---
<!-- _class: lead -->
## CSS - Reguły

```css
p,li,h1 { color: red; }
```

wszystkie wspomniane elementy czerwone

---
<!-- _class: lead -->
## CSS - Reguły

Po id:

```css
#intro { color: red; }
```

```html
<p id="intro">czerwony</p>
```

---
<!-- _class: lead -->
## CSS - Reguły
Po klasach:

```html
<h2 class="content">Nagłówek ma klasę content.</h2>
<p class="content">Ten paragraf oznaczyłem za pomocą klasy content. </p>
```

```css
.content {
color: #00f;
font-weight: bold;
font-style: italic; }
```

---
<!-- _class: lead -->
## CSS - w dokumencie

```html
<head>
<style>
h1 {
  color: blue;
}
</style>
</head>
```

<!--
<head>
<style>
h1 {
  color: blue;
}


h2, h1 p {
  color: red;
}

h2 {
  color: yellow
}


</style>
<body>
<h1>WSB</h1>

<h1><p>123</p></h1>

<h2>123</h2>
</body>
</head>
-->

---
<!-- _class: lead -->
## CSS - zewnętrzny

```html
<head>
<link rel="stylesheet" href="style.css" type="text/css" />
</head>
```

---
<!-- _class: lead -->
## CSS

- kaskady reguł
- wszystki + ostatnia nadpisuje poprzednie lub bardziej precyzyjne

---
<!-- _class: lead -->
## CSS

Zacznij od korzystania z gotowych komponentów:

1. [bootstrap](https://getbootstrap.com/docs/5.3/layout/containers/)
2. ... ([more](https://dev.to/theme_selection/best-css-frameworks-in-2020-1jjh))
3. [materializecss](https://materializecss.com)
4. [ant.design](https://ant.design/components/checkbox)
4. [tailwindcss](https://tailwindcss.com)

---
<!-- _class: lead -->
## Selektory: xpath, css

Wróćmy do naszego  Web Developer Tools.

- Copy -&gt; CSS selector,
- Copy -&gt; XPath,
- Potrzebne przy pracy z [cypress](https://www.cypress.io/) czy [selenium](https://www.selenium.dev/).
---
<!-- _class: lead -->
## DNS

DNS - Domain Name Server

```bash
dig google.com
```

---
<!-- _class: lead -->
## DNS

Sprawdźmy kto posiada domenę
`wsb.pl` na https://www.dns.pl/whois

---
<!-- _class: lead -->
## HTTP

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/fetching_a_page.png)

---
<!-- _class: lead -->
## HTTP

[Podstawy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP):

- HTTP is simple
- HTTP is extensible
- HTTP is stateless (but not sessionless)
- HTTP relies on TCP (connection based)

---
<!-- _class: lead -->

## HTTP

![height:600px](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http-layers.png)

---
<!-- _class: lead -->
## HTTP

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/client-server-chain.png)

---
<!-- _class: lead -->
## HTTP

Demo:

```bash

curl -I www.google.com

curl -I -L google.com
```

---
<!-- _class: lead -->
## HTTP - methods

[Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods):

- GET
- POST
- DELETE

---
<!-- _class: lead -->
## HTTP - methods

Demo:

```bash
http POST  https://httpbin.org/post "name"="natalia"
```

---
<!-- _class: lead -->
## HTTP - status code

[Status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status):

- 5xx: 500, 502
- 4xx: 404, 400, 401
- 3xx: 301, 302
- 2xx: 200, 201, 02

---
<!-- _class: lead -->
## HTTP - status code

Demo:

```bash
curl -I -X GET https://httpbin.org/status/404 --fail

curl -I -X GET https://httpbin.org/status/200 --fail
```
---
<!-- _class: lead -->
## A co z serwisami?

- +/- Wiemy jak działają przeglądarki
- co z web API?

---
<!-- _class: lead -->
## Dziękuję za uwagę
<br />

---
<!-- _class: lead -->
# Backup slides
<!-- https://wttr.in/ -->

---
<!-- _class: lead -->
## Protokoły

Najpopularniejsze:

- RPC
- REST / almost-REST
- GraphQL

---
<!-- _class: lead -->
## 3-tier architecture

- Frontend
- backend
- baza danych

---
<!-- _class: lead -->
## Jak hostować?

- PaaS: [vercel](https://vercel.com/), [netify](https://www.netlify.com/), [heroku](https://www.heroku.com/);
- CaaS (AWS EKS, GCP) - container-as-a-service
- XaaS (AWS, GCP):

  - IaaS
