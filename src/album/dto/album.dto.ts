import { ObjectType, Field, ID } from '@nestjs/graphql';
@ObjectType()
export class album {
    @Field()
    readonly name: string;
    @Field()
    readonly imgUrl: string;
    @Field(() => [ID])
    readonly artists: string[];

}