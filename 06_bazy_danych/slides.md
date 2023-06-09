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
#### Programowanie App Internetowych

![width:400px](img/analogia_frigate_pallada.jpg)

Bazy danych

---
<!-- _class: lead -->
## Na dziś:

- bazy danych - co mamy do wyboru?
- plain SQL vs ORM
- SQL DB + express.io
- primsa

---
<!-- _class: lead -->
## Bazy danych

- SQL: PSQL && MySQL,
- noSQLs: Amazon DynamoDB, mongodb,
- cache: od edge i web cache po redis/memcache po stronie backendu.

---
<!-- _class: lead -->
## Nie zapomnijmy o

- Object storage, np.: Amazon S3 czy Google Storage
- kolejki:

  - Amazon SQS, RabbitMQ, Kafka

- Backend-as-a-Serive, np., Google Firebase

---
<!-- _class: lead -->
## SQL

![width:350px](Blog_Babelfish-750x422-c-default.png)

---
<!-- _class: lead -->
## SQL

Na zajęciach o bazach danych, nie będziemy omawiać:
- ACID
- [Modele spójności](https://aphyr.com/posts/313-strong-consistency-models)
- Eventual consistency

![width:650px](https://aphyr.com/data/posts/313/uniprocessor-history.jpg)
