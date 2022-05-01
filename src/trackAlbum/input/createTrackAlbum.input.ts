import { ObjectType, InputType, Field, ID } from '@nestjs/graphql';
@InputType()
export class createTrackAlbumInput {
    @Field()
    readonly trackName: string
    @Field()
    readonly audioUrl: string
    @Field(() => ID)
    readonly albumID: string

}