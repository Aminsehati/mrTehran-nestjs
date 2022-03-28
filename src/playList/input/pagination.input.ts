import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class Pagination {
    @Field(() => Int)
    limit: number
    @Field(() => Int)
    skip: number
}