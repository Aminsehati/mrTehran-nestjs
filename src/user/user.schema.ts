import * as mongoose from 'mongoose'
export const userSchema = new mongoose.Schema({
    firstName:{
        type:String ,
        default:""
    },
    lastName:{
        type:String ,
        default:""
    },
    isAdmin:{
        type:Boolean ,
        default:false,
    },
    phoneNumber : {
        type:String ,
        required:true 
    },
    password:{
        type:String ,
        default:""
    },
    userName:{
        type:String ,
        default:""
    }
},{
    timestamps:true 
})