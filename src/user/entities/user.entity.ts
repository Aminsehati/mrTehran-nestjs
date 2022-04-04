import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  readonly firstName: string
  @Field()
  readonly lastName: string
  @Field(() => Boolean)
  readonly isAdmin: boolean
  @Field()
  readonly phoneNumber: string
  @Field()
  readonly username: string
}
