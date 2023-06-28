import streamerModel from '../models/Streamer.js';

export const registerStreamer = async (req, res) => {
    try {
        const newStreamer = new streamerModel({
            name: req.body.name,
            platform: req.body.platform,
            description: req.body.description,
            vote: 0,
            image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png',
        });
        await newStreamer.save();
        res.status(201).json({ newStreamer });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error. Streamer is not created',
        });
    }
};

export const getAllStreamers = async (req, res) => {
    try {
    } catch (error) {}
};

export const getStreamerById = async (req, res) => {
    try {
    } catch (error) {}
};

export const updateStreamer = async (req, res) => {
    try {
    } catch (error) {}
};
