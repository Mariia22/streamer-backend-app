import express from 'express';
import http from 'http';
import cors from 'cors';
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
app.use(cors());
connectDB();
io.on('connect', (socket) => {
    socket.on('disconnect', () => {});
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
server.listen(process.env.PORT || 3000);
