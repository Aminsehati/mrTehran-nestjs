import { Document } from 'mongoose'
export interface TracksAlbum extends Document {
    readonly trackName: string;
    readonly audioUrl: string;
    readonly view: number;
    readonly like: number;
}