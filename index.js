import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import {
    formBodyValidation,
    handleValidationErrors,
} from './validation/index.js';
import { StreamerController } from './controllers/index.js';

mongoose
    .connect(process.env.DB)
    .then(() => console.log('Connection to DB is succeed'))
    .catch((error) => console.log('DB error', error));

const app = express();
app.use(express.json());

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
    formBodyValidation,
    handleValidationErrors,
    StreamerController.updateStreamer
);

app.listen(process.env.PORT, (error) => {
    if (error) {
        return console.log(error);
    }
});
