import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pino from 'pino';
import {context, propagation, trace} from "@opentelemetry/api";

dotenv.config();

const app_name = "order-mgmt-app"

const tracer = opentelemetry.trace.getTracer(
     app_name
);

const logger = pino({
     name:   app_name,
     level: 'info'
});

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
     logger.info({"handler": "/"}, "Calling the main")
     tracer.startActiveSpan('main', (span) => {
          res.json({ method: req.method, message: "Hello World", ...req.body });
     }
});

app.listen(port, () => {
     logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});
