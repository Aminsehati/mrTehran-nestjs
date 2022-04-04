import { Field } from "@nestjs/graphql";
export class registerUser {
    @Field()
    phoneNumber:string 
    @Field()
    password:string
}