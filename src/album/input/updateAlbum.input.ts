import { Field, ID, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class updateTrackInput {
    @Field()
    readonly name: string
    @Field()
    readonly imgUrl: string
    @Field(() => [ID])
    readonly artists: string[]
}