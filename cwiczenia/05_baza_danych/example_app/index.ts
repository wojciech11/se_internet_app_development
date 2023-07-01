import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Knex from 'knex';
import  * as knexConfigs from './knexfile';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

const envName: string = process.env.NODE_ENV || 'development';

console.log(knexConfigs)

const knexCfg = knexConfigs[envName]
console.log(knexCfg)

const knex = Knex(knexCfg)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server hahah' + knexCfg["client"]);
});

app.get('/employees', (req: Request, res: Response) => {
  knex.select().from("employee").then((empls) => {
    res.send(empls)
  })
});

app.listen(port, () => {
   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
