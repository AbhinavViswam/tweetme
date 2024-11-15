const mongoose=require('mongoose')
const {v4:uuidv4}=require("uuid")

const userSchema = mongoose.Schema({
    _id:{
        type:String,
        default:uuidv4
    },
    email : {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password : {
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true,
        uppercase:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number
    },
    bio:{
        type:String
    },
    dob:{
        type:String
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:"user"
    }, 
    isBlocked:{
        type:Boolean,
        default:false
    } 
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema)

module.exports=User;