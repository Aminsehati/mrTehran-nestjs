import { Module } from '@nestjs/common';
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
@Module({
    imports: [UserModule, JwtModule.register({
        signOptions: {
            expiresIn: "172800s"
        },
        secret: "2e0da13522dc783a0bc4fc1bc086dd56ee3ad50291ed5391ffd16271a39f94fcf3ce906350bc590a5d076229ffe4ec28"
    })],
    providers: [ AuthResolver, AuthService, JwtStrategy  ]
})
export class AuthModule { }
