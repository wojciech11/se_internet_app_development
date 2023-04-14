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
- HTTP
- DNS


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

- prezentacje z [revealjs](https://revealjs.com/),
- blog na wordpress lub na alterntywnej platformie,
- Warto skorzystać z gotowych komponentów, np., [bootstrap](https://getbootstrap.com/docs/5.3/layout/containers/).

---
<!-- _class: lead -->
## CSS

- CSS - Cascading Style Sheets
- [przykład](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)

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
## DNS

DNS - Domain Name Server

---
<!-- _class: lead -->
## HTTP

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/fetching_a_page.png)

---
<!-- _class: lead -->
## HTTP

- HTTP is simple
- HTTP is extensible
- HTTP is stateless (but not sessionless)
- HTTP relies on TCP (connection based)

---
<!-- _class: lead -->
## HTTP

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http-layers.png)

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
## HTTP - status codes

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
## HTTP

- [Podstawy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP)

---
<!-- _class: lead -->
## Dziękuję za uwagę
<br />
