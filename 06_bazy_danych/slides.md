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

![width:700px](img/Blog_Babelfish-750x422-c-default.png)

---
<!-- _class: lead -->
## SQL

Nie będziemy omawiać:
- [CAP](https://en.wikipedia.org/wiki/CAP_theorem)/[PACELC](https://en.wikipedia.org/wiki/PACELC_theorem)
- [Modele spójności](https://aphyr.com/posts/313-strong-consistency-models) i ACID
- Eventual consistency

![width:650px](https://aphyr.com/data/posts/313/uniprocessor-history.jpg)

---
<!-- _class: lead -->
## Którą bazę danych?

Pragmatycznie:

1. SQL - zgodny z [Postgres](https://www.postgresql.org/) lub [MySQL](https://www.mysql.com/) API;
2. Hostowany przez cloud providers (aka życie za krótkie jest, aby zarządzać bazą danych i backupem);
3. Nie szedłbym w NoSQL czy grafowe, jeśli nie ma bardzo mocnych przesłanek.

---
<!-- _class: lead -->
## Którą bazę danych?

Side note - ważna decyzja techniczna

1. Napisz design doc,
2. Warto dodać sekcję pre-mortem.

---
<!-- _class: lead -->
## Którą bazę danych?

New global scale DBs:

- [cockroach DB](https://www.cockroachlabs.com/)
- Yugabyte

Fascynująca dziedzina w inżynierii!

---
<!-- _class: lead -->
## Baza danych vs App

1. Plain SQL
2. Lightweigh DSL over SQL (**tutaj zacznij**)
3. ORM


Zobacz też: [logrocke blog](https://blog.logrocket.com/node-js-orms-why-shouldnt-use/).


---
<!-- _class: lead -->
## Plain SQL with Database driver

```js
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
```

---
<!-- _class: lead -->
## Lightweigh DSL

Query Builder - [knex](https://github.com/knex/knex):

```js
const pg = require('knex')({client: 'pg'});

knex('table')
  .insert({a: 'b'})
  .returning('*')
  .toString();
```

---
<!-- _class: lead -->
## ORM

Na plus:

- Avoid redundant code
- Easily switch from one database to another
- Query for multiple tables (ORM converts the object-oriented query approach to SQL)
- Focus more on business logic and less on writing interfaces

---
<!-- _class: lead -->
## ORM

Praktyka:

- niska wydajność,
- daje fałszywe poczucie, że nie trzeba myśleć o bazie danych
- dużo magi, trudne w debugingu

---
<!-- _class: lead -->
## Rekomendacja

- Unikaj ORMów;
- Query buildery lub DSL z lekką abstrakcją OK;
- Zacznij od query builderów, np., [knex](https://github.com/knex/knex);
- Weryfikuj zapytania z `explain` i `analyze`!!
- Monitoruj zapytania

---
<!-- _class: lead -->
## Na przykład - PSQL

- [Explain](https://wiki.postgresql.org/images/4/45/Explaining_EXPLAIN.pdf),
- [Query Plan Visualization](http://tatiyants.com/postgres-query-plan-visualization/)
- [Types of Indexes](https://www.justwatch.com/blog/post/mastering-postgres-indexes-in-10-minutes/)

Good read: [Debugging PSQL the hardway](https://www.justwatch.com/blog/post/debugging-postgresql-performance-the-hard-way/)

---
<!-- _class: lead -->
## Performance

- Powyżej 200ms = **za wolno**!!
- Generalnie ([src](https://postgres.ai/blog/20210909-what-is-a-slow-sql-query)):

![width:600px](https://postgres.ai/assets/blog/20210909-slow-sql.png)

---
<!-- _class: lead -->
### PSQL + Expressjs

[Expressjs + Knex](https://frontend.turing.edu/lessons/module-4/knex-postgres.html)

---
<!-- _class: lead -->

![width:650px](https://raw.githubusercontent.com/prisma/presskit/main/Assets/Prisma-IndigoLogo.svg)

---
<!-- _class: lead -->
### Prisma

- ORM for Node.js and Typescript

---
<!-- _class: lead -->
### Prisma

Model (`prisma/schema.prisma`):

```prism-code
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

---
<!-- _class: lead -->
### Prisma

Create a tuple:

```typescript
const user = await prisma.user.create({
  data: {
    name: 'Alice',
    email: 'alice@prisma.io',
  },
})
```

---
<!-- _class: lead -->
### Prisma

Query:
```typescript
const users = await prisma.user.findMany()
console.log(users)
```

---
<!-- _class: lead -->
### Prisma

Create with the related tuple:

```typescript
const user = await prisma.user.create({
  data: {
    name: 'Bob',
    email: 'bob@prisma.io',
    posts: {
      create: {
        title: 'Hello World',
      },
    },
  },
})
```

---
<!-- _class: lead -->
### Prisma

- [Quickstart](https://www.prisma.io/docs/getting-started/quickstart)
- Next (after learning *knex*):

  - [prisma + express](https://www.prisma.io/express)
  - [prisma + Next.js](https://www.prisma.io/nextjs)

---
<!-- _class: lead -->
### Dziękuję

Czy są jakieś pytania?
