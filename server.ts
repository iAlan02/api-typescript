import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import router from './routes/index';

const middleware = '';


const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

// middleware(app);

app.use('/', router);

const server = app.listen(port);

export = server;

