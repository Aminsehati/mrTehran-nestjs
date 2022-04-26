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
    tracks: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                default:()=>{
                    return new mongoose.Types.ObjectId().toString()
                }
            },
            audioUrl: {
                type: String,
            },
            trackName: {
                type: String,
            },
            view: {
                type: Number,
                default: 0
            },
            like: {
                type: Number,
                default: 0
            }
        }
    ]
}, {
    timestamps: true
})