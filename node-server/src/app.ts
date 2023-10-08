import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import './db';
//---------------
import authRouter from './routers/auth-router';
import errorMiddleware from './middleware/error-handler';
// --------------
const app: Express = express();
const port: number = 3000;

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan('common'));
app.use(cookieParser());
app.use(errorMiddleware); // Error handler

// Routers
app.use('/api/v1/auth', authRouter);

app.listen(port, () => {
  console.log('[Server]: Node server running on port:5000');
});
