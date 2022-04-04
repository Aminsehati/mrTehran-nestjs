import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from '../user/user.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: '2e0da13522dc783a0bc4fc1bc086dd56ee3ad50291ed5391ffd16271a39f94fcf3ce906350bc590a5d076229ffe4ec28',
        })
    }
    async validate(payload: any) {
        return {
            _id: payload._id,
            phoneNumber: payload.phoneNumber,
            userId: payload._id,
            username: payload.phoneNumber
        }
    }
}