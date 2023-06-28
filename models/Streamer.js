import mongoose from 'mongoose';

const StreamerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        platform: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        avatarUrl: String,
        vote: Number
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Streamer', StreamerSchema);
