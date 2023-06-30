import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import 'dotenv/config';
import {
    formBodyValidation,
    updateVoteBodyValidation,
    handleValidationErrors,
} from './validation/index.js';
import { StreamerController } from './controllers/index.js';
import connectDB from './db/connection.js';

const app = express();
const server = http.createServer(app);
export const io = new Server(server, {
    cors: {
        origin: [process.env.FRONTEND_APP],
    },
});

app.use(express.json());
connectDB();
io.on('connect', (socket) => {
    console.log(`user connected`);
    socket.on('disconnect', () => {
        console.log(`user disconnected`);
    });
});

app.post(
    '/streamers',
    formBodyValidation,
    handleValidationErrors,
    StreamerController.registerStreamer
);
app.get('/streamers', StreamerController.getAllStreamers);
app.get('/streamer/:streamerId', StreamerController.getStreamerById);
app.put(
    '/streamers/:streamerId/vote',
    updateVoteBodyValidation,
    handleValidationErrors,
    StreamerController.updateStreamer
);
app.listen(process.env.PORT, (error) => {
    if (error) {
        return console.log(error);
    }
});
