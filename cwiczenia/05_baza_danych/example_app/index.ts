import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import knexConfigs from './knexfile';

dotenv.config();

const app: Express = express();

const port = process.env.PORT;

const envName = process.env.NODE_ENV || 'development';

console.log(knexConfigs)
const knexConfig = knexConfigs[envName];
console.log(knexConfig)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server hahah' + knexConfig["client"]);
});

app.listen(port, () => {
   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
