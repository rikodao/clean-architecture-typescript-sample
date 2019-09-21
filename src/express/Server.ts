import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import BaseRouter from './routers/index';
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api', BaseRouter);

export default app;
