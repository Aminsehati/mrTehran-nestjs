import { InputType, Field, Int } from '@nestjs/graphql';
@InputType()
export class sortTrackAlbum {
    @Field(() => Int)
    readonly view: number
    @Field(() => Int)
    readonly like: number
    @Field(() => Int)
    readonly createdAt: number
    @Field(() => Int)
    readonly updatedAt: number
}