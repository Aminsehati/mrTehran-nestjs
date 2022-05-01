import * as mongoose from 'mongoose'
export const trackAlbum = new mongoose.Schema({
    trackName: {
        type: String,
        required: true
    },
    audioUrl: {
        type: String,
        required: true
    },
    albumID: {
        type: mongoose.Types.ObjectId,
        ref: "albums"
    },
    view: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})