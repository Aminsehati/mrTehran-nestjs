import { Field, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class createUser {
    @Field()
    phoneNumber: string
    @Field()
    password: string
}