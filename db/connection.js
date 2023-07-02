import mongoose from 'mongoose';

export default function connectDB() {
    mongoose.connect(process.env.DB);
}
