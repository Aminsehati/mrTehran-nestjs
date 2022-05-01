import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class filterTrackAlbum {
    @Field(() => [ID])
    artists: string[]
    @Field(() => ID)
    albumID: string
}