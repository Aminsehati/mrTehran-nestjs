import { ObjectType, Field } from '@nestjs/graphql';
import { Artist } from '../../artist/dto/artist.dto'
import { TrackAlbum } from './trackAlbum.dto'
@ObjectType()
export class album {
    @Field()
    readonly name: string;
    @Field()
    readonly imgUrl: string;
    @Field(() => [Artist])
    readonly artists: Artist[];
    @Field(() => [TrackAlbum])
    tracks: TrackAlbum[];

}