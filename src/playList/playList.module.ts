import { Module } from '@nestjs/common';
import { PlayListService } from './playList.service'
import { PlayListResolver } from './playList.resolver'
import { PlayListSchema } from './playList.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'playlists', schema: PlayListSchema }])],
    providers: [PlayListResolver, PlayListService]
})
export class PlayLisModule { }
