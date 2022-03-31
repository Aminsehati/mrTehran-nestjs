import { Document } from 'mongoose'
import { Artist } from '../../artist/interface/artist.interface'
export interface Track extends Document {
    readonly imgUrl: string;
    readonly audioUrl: string;
    readonly trackName: string;
    readonly view: number;
    readonly like: number;
    readonly artists: Artist[]
}