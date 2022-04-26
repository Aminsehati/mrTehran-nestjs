import { ObjectType, Field, Int } from '@nestjs/graphql';
@ObjectType()
export class TrackAlbum {
    @Field()
    trackName: string;
    @Field()
    audioUrl: string;
    @Field(() => Int)
    view: number;
    @Field(() => Int)
    like: number;
}