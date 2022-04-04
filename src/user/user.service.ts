import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface'
import { createUser } from './dto/createUser.inptu';
@Injectable()
export class UserService {
  constructor(@InjectModel('users') private readonly usersModel: Model<User>) { }
  async findOneByPhoneNumber(phoneNumber: string) {
    return await this.usersModel.findOne({ phoneNumber });
  }
  async findOneByID(id:string) {
    console.log('id',id);
    
    return this.usersModel.findOne({ _id: id })
  }
  async createUser(input: createUser) {
    return await this.usersModel.create(input)
  }
}
