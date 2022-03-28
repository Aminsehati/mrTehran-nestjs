import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class Pagination {
    @Field(() => Int)
    readonly limit: number
    @Field(() => Int)
    readonly skip: number
}