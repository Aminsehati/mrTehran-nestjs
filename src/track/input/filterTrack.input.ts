import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class filterTrack {
    @Field(() => ID)
    artistID: string
    @Field(() => ID)
    playlistID: string
}