import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username : {
        type : string,
        required : true,
        lowerletter : true,
    },
    email :{
        type : string,
    }
})

export const User = mongoose.model("User", userSchema)