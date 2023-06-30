import mongoose from 'mongoose';

export default function connectDB() {
    mongoose
        .connect(process.env.DB)
        .then(() => console.log('Connection to DB is succeed'))
        .catch((error) => console.log('DB error', error));
}
