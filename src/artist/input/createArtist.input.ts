import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class createArtist {
    @Field()
    readonly name: string
    @Field()
    readonly imgUrl: string
    @Field()
    readonly coverImgUrl: string
    @Field(() => Int)
    readonly Followers: number
}