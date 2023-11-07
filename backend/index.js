import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import { authRouter, userRouter, doctorRouter } from './routes/index.js';
import authenticate from './middleware/authentication.js';

const server = express();
const port = process.env.PORT || 3000;
dotenv.config();

// Middleware - at Application level or Application Level Middlewares
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// API routes
server.use('/api/v1/auth', authRouter);
server.use('/api/v1/user', userRouter);
server.use('/api/v1/doctor', doctorRouter);

// Default route
server.get('/api/v1', (req, res) => {
    res.status(200).send("Working on Version 1 for the server of Health Monitoring System");
});

// Root route
server.get('/', (req, res) => {
    res.status(200).send("Server of Health Monitoring System is running");
});

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connection established");
        server.listen(port, () => {
            console.log('Server is running on port: ' + port);
        });
    })
    .catch(error => {
        console.error("DB connection failed:", error);
    });
