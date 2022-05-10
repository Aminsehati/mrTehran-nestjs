import { ObjectType, Field, ID } from '@nestjs/graphql';
@ObjectType()
export class trackAlbum {
    @Field()
    readonly trackName: string
    @Field()
    readonly audioUrl: string
    @Field(() => ID)
    readonly album: string
}