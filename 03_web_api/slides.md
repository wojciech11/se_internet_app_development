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

API / Komunikacja między serwisami

---
<!-- _class: lead -->
## Plan na dziś
<br />

- http
- RPC
- REST
- GraphQL

---
<!-- _class: lead -->
## HTTP

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/fetching_a_page.png)

---
<!-- _class: lead -->
## HTTP

Cała infrastruktura przystosowana do pracy z http:

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
## WebSockets

- dwu-stronnej szybkiej komunikacji
- Alternatywa dla *long polling*

Więcej później o websocketach później.

---
<!-- _class: lead -->
## A co z serwisami?

- +/- Wiemy jak działają przeglądarki
- co z serwisami?

---
<!-- _class: lead -->
## A co z serwisami?

![](img/web_apis.svg)

---
<!-- _class: lead -->
## Protokoły

Najpopularniejsze:

- (web) RPC
- REST API
- GraphQL

---
<!-- _class: lead -->
## (web) RPC

- RPC (remote procedure call)
- po prostu wywołanie zewnętrznej funkcji


---
<!-- _class: lead -->
## (web) RPC

```typescript
```


---
<!-- _class: lead -->
## REST API

- Most popular


---
<!-- _class: lead -->
## REST API

- Most popular




- [json API](https://jsonapi.org/)








- RPC
- REST / almost-REST
- GraphQL







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
