import { Module } from '@nestjs/common';
import { AlbumServie } from './album.service'
import { albumResolver } from './album.resolver'
import { albumSchema } from './album.schema'
import { artistSchema } from '../artist/artist.schema'
import { PlayListSchema } from '../playList/playList.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'albums', schema: albumSchema }, { name: 'artists', schema: artistSchema }, { name: "playlists", schema: PlayListSchema }])],
    providers: [albumResolver, AlbumServie]
})
export class AlbumModule { }
