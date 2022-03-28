import * as mongoose from 'mongoose'
export const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    coverImgUrl: {
        type: String,
        required: true,
    },
    Followers: {
        type: Number,
        default: 0
    }

})