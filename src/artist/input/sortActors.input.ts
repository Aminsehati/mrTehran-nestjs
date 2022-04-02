import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class sortArtists {
    @Field(() => Int)
    name: number
    @Field(() => Int)
    Followers: number
    @Field(() => Int)
    createdAt: number
    @Field(() => Int)
    updatedAt: number
}