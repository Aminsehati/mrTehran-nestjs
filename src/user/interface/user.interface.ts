import { Document } from 'mongoose'
export interface User extends Document {
    readonly firstName: string
    readonly lastName: string
    readonly isAdmin: boolean
    readonly phoneNumber: string
    readonly username: string
    readonly password: string
}