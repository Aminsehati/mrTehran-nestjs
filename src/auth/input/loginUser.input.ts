import { Field, InputType } from "@nestjs/graphql";
@InputType()
export class loginUser {
    @Field()
    phoneNumber: string
    @Field()
    password: string
}