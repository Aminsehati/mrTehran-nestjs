import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PlayList {
    @Field()
    readonly name: string
    @Field()
    readonly imgUrl: string
    @Field()
    readonly coverImgUrl: string
    @Field(() => Int)
    readonly Followers: number
}