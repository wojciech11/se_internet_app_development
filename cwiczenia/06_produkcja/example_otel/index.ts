import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pino from 'pino';

dotenv.config();

const logger = pino({
     name:   'order-mgmt-app',
     level: 'info'
});

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
     logger.info({"handler": "/"}, "Calling the main")
     res.json({ method: req.method, message: "Hello World", ...req.body });
});

app.listen(port, () => {
     logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});
