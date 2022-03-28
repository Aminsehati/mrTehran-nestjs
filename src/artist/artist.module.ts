import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service'
import { ArtistResolver } from './artist.resolver'
import { artistSchema } from './artist.schema'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'artists', schema: artistSchema }])],
    providers: [ArtistResolver, ArtistService]
})
export class ArtistModule { }
