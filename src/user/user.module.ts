import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: userSchema }])],
  providers: [UserResolver, UserService] ,
  exports:[UserService]
})
export class UserModule { }
