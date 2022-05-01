import * as mongoose from 'mongoose'
export const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    artists: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
            },
            name: {
                type: String,
            },
            imgUrl: {
                type: String,
            },
            coverImgUrl: {
                type: String,
            },
            Followers: {
                type: Number,
                default: 0
            }
        }
    ],
}, {
    timestamps: true
})