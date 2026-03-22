import mongoose from "mongoose" ;

const todoSchema = new mongoose.Schema({
    contact: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    }
} , {timestamps : true})

export const Todo = mongoose.model("todo" , todoSchema)