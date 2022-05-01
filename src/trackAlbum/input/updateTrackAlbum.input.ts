import { ObjectType, InputType, Field, ID } from '@nestjs/graphql';
@InputType()
export class updateTrackAlbumInput {
    @Field()
    readonly trackName: string
    @Field()
    readonly audioUrl: string
    @Field(() => ID)
    readonly albumID: string
}