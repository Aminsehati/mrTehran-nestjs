import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class updatePlayList {
    @Field()
    readonly name: string
    @Field()
    readonly imgUrl: string
    @Field()
    readonly coverImgUrl: string
}