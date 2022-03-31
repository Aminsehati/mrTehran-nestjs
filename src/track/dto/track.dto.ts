import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Artist } from '../../artist/dto/artist.dto'

@ObjectType()
export class track {
    @Field()
    readonly imgUrl: string
    @Field()
    readonly audioUrl: string
    @Field()
    readonly trackName: string
    @Field(() => Int)
    readonly view: number
    @Field(() => Int)
    readonly like: number
    @Field(() => [Artist])
    artists: Artist[]
}