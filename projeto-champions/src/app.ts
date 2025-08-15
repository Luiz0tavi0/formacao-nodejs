import express, { Express } from 'express';
import cors from 'cors';
import router from './routes';

export function createApp(): Express {
  const app = express();
  app.use(express.json());

  const corsOptions = {
    origin: ["http://felipao.sistem.com", "http://gov.br"],
    methods: ["GET", "UPDATE"],
  };
  app.use(cors(corsOptions));

  app.use('/api', router);

  return app;
}
