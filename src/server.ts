import 'dotenv/config';
import express, { Application } from 'express';

import router from './routes';

const server: Application = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(router);

export default server;
