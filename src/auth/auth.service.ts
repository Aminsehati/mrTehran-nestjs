import { BadRequestException, Injectable } from '@nestjs/common';
import { registerUser } from './input/registerUser.inout';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { loginUser } from './input/loginUser.input';
@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) { }
    async registerUser(input: registerUser) {
        const user = await this.userService.findOneByPhoneNumber(input.phoneNumber);
        if (user) {
            return new BadRequestException('The mobile number has already been used');
        }
        const newUser = await this.userService.createUser({
            phoneNumber: input.phoneNumber,
            password: await bcrypt.hash(input.password, 10)
        });
        return {
            access_token: this.jwtService.sign({ _id: newUser._id })
        }
    }
    async loginUser(input: loginUser) {
        const user = await this.userService.findOneByPhoneNumber(input.phoneNumber);
        if (!user) {
            return new BadRequestException('Wrong number or password');
        }
        const hashPassowrd = await bcrypt.hash(user.password, 10);
        const verifyPassword = await bcrypt.compare(user.password, hashPassowrd);
        if (!verifyPassword) {
            return new BadRequestException('Wrong number or password');
        }
        return {
            access_token: this.jwtService.sign({ _id: user._id, phoneNumber: user.phoneNumber })
        }

    }
    async getUserInfo() {
        console.log('ssss');

    }
}