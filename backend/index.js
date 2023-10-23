import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import authRouter from './routes/auth.js';
import authentication from './middleware/authentication.js';

const server = express();
dotenv.config();

// middleware used at application level
server.use(cors());
server.use(express.json());

// routing middlewares
server.use('/', authentication)
server.use('/auth', authRouter);
server.use('/', (req, res) => res.status(200).send('Welcome to Health Monitoring Server built on express!'));

// db connection
mongoose.connect(process.env.MONGODB_ADDRESS);

server.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);   
})