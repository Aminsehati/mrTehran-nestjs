import { Field, ID, InputType } from "@nestjs/graphql";


@InputType()
export class createAlbumInput {
    @Field()
    name: string;
    @Field()
    imgUrl: string;
    @Field(() => [ID])
    artists: string[];
}