import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import knex from 'knex';
import  * as knexConfigs from './knexfile';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

const envName = process.env.NODE_ENV || 'dev';

console.log(knexConfigs)

const knexCfg = knexConfigs[envName]
console.log(knexCfg)
const kdb = knex(knexCfg)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server hahah' + knexConfig["client"]);
});

app.get('/employees', (req: Request, res: Response) => {
  kdb.select().from("employee").then((empls) => {
    res.send(empls)
  })
});

app.listen(port, () => {
   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
