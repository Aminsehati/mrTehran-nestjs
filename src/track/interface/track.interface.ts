import { Document } from 'mongoose'
import { Artist } from '../../artist/interface/artist.interface'
import { PlayList } from '../../playList/interface/playList.interface'
export interface Track extends Document {
    readonly imgUrl: string;
    readonly audioUrl: string;
    readonly trackName: string;
    readonly view: number;
    readonly like: number;
    readonly artists: Artist[]
    readonly playlists: PlayList[]
}