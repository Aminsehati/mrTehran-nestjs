import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class sortPlayList {
    @Field(() => Int)
    readonly name: number
    @Field(() => Int)
    readonly Followers: number
    @Field(() => Int)
    readonly createdAt: number
    @Field(() => Int)
    readonly updatedAt: number
}