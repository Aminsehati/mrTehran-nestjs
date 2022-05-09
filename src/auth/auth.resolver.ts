import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { registerUser } from './input/registerUser.inout';
import { Token } from './entities/token.entities';
import { loginUser } from './input/loginUser.input';
import { User } from '../user/entities/user.entity'
@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) { }
    @Mutation(() => Token)
    registerUser(@Args('input') input: registerUser) {
        try {
            return this.authService.registerUser(input);
        } catch (error) {
            console.log('error', error);
        }
    }

    @Mutation(() => Token)
    loginUser(@Args('input') input: loginUser) {
        try {
            return this.authService.loginUser(input);
        } catch (error) {
            console.log('error', error);
        }
    }
    @Query(() => User)
    async getUserInfo(@Context() context) {
        try {
            return this.authService.getUserInfo();
        } catch (error) {
            console.log('error', error);
        }
    }
}