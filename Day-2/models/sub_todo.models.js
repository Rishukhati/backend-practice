import mongoose from "mongoose";

const subSchema = new mongoose.Schema({},{timestampes : true})

export const subTodo = mongoose.model("subTodo" , subSchema)