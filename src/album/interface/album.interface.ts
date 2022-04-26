import { Document } from 'mongoose'
import { Artist } from '../../artist/interface/artist.interface'
import { albumTrack } from './albumTrack.interface'
export interface Album extends Document {
    readonly name: string;
    readonly imgUrl: string;
    readonly artists: Artist[]
    readonly tracks: albumTrack[]
}