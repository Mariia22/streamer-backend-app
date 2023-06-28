import { imageURL } from '../const/index.js';
import streamerModel from '../models/Streamer.js';

export const registerStreamer = async (req, res) => {
    try {
        const newStreamer = new streamerModel({
            name: req.body.name,
            platform: req.body.platform,
            description: req.body.description,
            vote: 0,
            avatarUrl: imageURL,
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
        const streamers = await streamerModel.find();
        res.status(200).json(streamers);
    } catch (error) {
        res.status(500).json({
            message: 'Server Error. Failed to get streamers',
        });
    }
};

export const getStreamerById = async (req, res) => {
    try {
        const streamerId = req.params.streamerId;

        const streamer = await streamerModel
            .findOne({ _id: streamerId })
            .exec();
        if (!streamer) {
            return res.status(404).json({
                message: `Streamer with id ${streamerId} is not found`,
            });
        }
        res.status(200).json(streamer);
    } catch (error) {
        res.status(500).json({
            message: 'Server Error. Failed to get streamer',
        });
    }
};

export const updateStreamer = async (req, res) => {
    try {
        const streamerId = req.params.streamerId;
        const currentStreamer = await streamerModel.findOne({
            _id: streamerId,
        });
        if (!currentStreamer) {
            return res.status(404).json({
                message: `Streamer with id ${streamerId} is not found`,
            });
        }
        const update = {
            name: currentStreamer.name,
            platform: currentStreamer.platform,
            description: currentStreamer.description,
            vote: currentStreamer.vote + req.body.vote,
            avatarUrl: currentStreamer.avatarUrl,
        };
        const updateStreamer = await streamerModel.findByIdAndUpdate(
            streamerId,
            update,
            { returnDocument: 'after' }
        );
        res.json({ updateStreamer });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error. Failed to change the streamer',
        });
    }
};
