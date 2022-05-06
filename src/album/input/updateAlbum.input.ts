import { Field, ID, ObjectType , InputType } from '@nestjs/graphql';
@InputType()
export class updateAlbumInput {
    @Field()
    readonly name: string
    @Field()
    readonly imgUrl: string
    @Field(() => [ID])
    readonly artists: string[]
}