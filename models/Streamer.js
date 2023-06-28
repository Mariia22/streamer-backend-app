import mongoose from "mongoose";

const StreamerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
)

export default mongoose.model("Streamer", StreamerSchema)
