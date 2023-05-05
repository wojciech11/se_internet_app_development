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

- Typescript
- Javascript




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

Przykłady:

- [example_py_call_rest_api](example_py_call_rest_api/)
- [example_js_call_rest_api](example_js_call_rest_api/)

---
<!-- _class: lead -->
## REST API

- Most popular

---
<!-- _class: lead -->
## REST API

Zasady:

- Stateless
- cacheable data
- logical organization of resources
- większości JSON-based

---
<!-- _class: lead -->
## REST API

Implementacje:

- [json API](https://jsonapi.org/)
- [OpenAPI](https://www.openapis.org/) - wsparcie dla generacji kodu i discovery

---
<!-- _class: lead -->
## REST API

Wiele godzin rozstało przepalone na dyskusjach co to jest REST API i czy dane API jest rzeczywiście REST...

---
<!-- _class: lead -->
## REST API

Dla purystów - [HATEOAS](https://restfulapi.net/hateoas/)

---
<!-- _class: lead -->
## Wyzwania REST API

- musimy składać dane po stronie klienta
- za każdym razem backend musi pisać API dla frontendu
- jak można przewidzieć co frontend potrzebuje...

---
<!-- _class: lead -->
## GraphQL

- https://graphql.org/
- https://graphql.org/learn/

---
<!-- _class: lead -->
## Narzędzia

- [insomnia](https://insomnia.rest/) lub [postman](https://www.postman.com/)
- [curl](https://curl.se/)
- [jq](https://stedolan.github.io/jq/)
- biblioteki [jmespath](https://jmespath.org/)

---
<!-- _class: lead -->
## Warto wiedzieć

- gRPC
- [OData](https://www.odata.org/) - less popular

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
