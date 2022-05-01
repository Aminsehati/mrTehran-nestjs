import { Module } from '@nestjs/common';
import { TrackAlbumService } from './trackAlbum.service'
import { TrackAlbumResolver } from './trackAlbum.resolver'
import { trackAlbum } from './trackAlbum.schema'
import { albumSchema } from '../album/album.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'tracksAlbum', schema: trackAlbum }, { name: "albums", schema: albumSchema }])],
    providers: [TrackAlbumResolver, TrackAlbumService]
})
export class TracksAlbumModule { }
