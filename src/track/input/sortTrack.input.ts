import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class sortTrack {
    @Field(() => Int)
    readonly trackName: number
    @Field(() => Int)
    readonly view: number
    @Field(() => Int)
    readonly like: number
    @Field(() => Int)
    readonly createdAt: number
    @Field(() => Int)
    readonly updatedAt: number
}