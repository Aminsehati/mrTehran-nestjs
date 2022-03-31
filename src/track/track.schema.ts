import * as mongoose from 'mongoose'
export const trackSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        required: true
    },
    audioUrl: {
        type: String,
        required: true,
    },
    trackName: {
        type: String,
        required: true
    },
    view: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    artists: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Actor"
        },
        name: {
            type: String
        },
        imgUrl: {
            type: String,
        },
        coverImgUrl: {
            type: String,
        },
        Followers: {
            type: Number,
        }
    }]
}, {
    timestamps: true
})