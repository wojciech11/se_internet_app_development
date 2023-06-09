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
## Bazy danych

![width:600px](img/overview_s4.svg)


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

![width:350px](img/Blog_Babelfish-750x422-c-default.png)

---
<!-- _class: lead -->
## SQL

Nie będziemy omawiać:
- ACID i [CAP](https://en.wikipedia.org/wiki/CAP_theorem)/[PACELC](https://en.wikipedia.org/wiki/PACELC_theorem)
- [Modele spójności](https://aphyr.com/posts/313-strong-consistency-models)
- Eventual consistency

![width:650px](https://aphyr.com/data/posts/313/uniprocessor-history.jpg)

---
<!-- _class: lead -->
## Którą bazę danych

Pragmatycznie:

- SQL - zgodny z [Postgres](https://www.postgresql.org/) lub [MySQL](https://www.mysql.com/) API;
- Hostowany przez cloud providers (aka życie za krótkie jest, aby zarządzać bazą danych i backupem).
