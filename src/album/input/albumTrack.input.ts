import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class albumTrackInput {
    @Field(() => ID)
    readonly albumID: string
    @Field()
    readonly trackName: string
    @Field()
    readonly audioUrl: string
}