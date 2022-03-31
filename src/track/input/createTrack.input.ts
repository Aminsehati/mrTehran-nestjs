import { Field, ID, InputType, Int } from "@nestjs/graphql";

@InputType()
export class createTrack {
    @Field()
    imgUrl: string
    @Field()
    audioUrl: string
    @Field()
    trackName: string
    @Field(() => Int)
    view: number
    @Field(() => Int)
    like: number
    @Field(() => [ID])
    artists: string[]
}