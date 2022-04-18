import { Module } from '@nestjs/common';
import { TrackService } from './track.service'
import { trackResolver } from './track.resolver'
import { trackSchema } from './track.schema'
import { artistSchema } from '../artist/artist.schema'
import { PlayListSchema } from '../playList/playList.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'tracks', schema: trackSchema }, { name: 'artists', schema: artistSchema }, { name: "playlists", schema: PlayListSchema }])],
    providers: [trackResolver, TrackService]
})
export class TrackModule { }
