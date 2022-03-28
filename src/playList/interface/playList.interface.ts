import { Document } from 'mongoose';
export interface PlayList extends Document {
    readonly _id: string,
    readonly name: string,
    readonly imgUrl: string,
    readonly coverImgUrl: string,
    readonly Followers: number
}