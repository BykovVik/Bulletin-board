import { Schema, model } from "mongoose";

interface User {
    name: string,
    last_name: string,
    email: string,
    password: string,
    birthdate: Date,
    avatar: string,
    phone: string,
}

const userSchema = new Schema({
    name: String,
    last_name: String,
    email: {type: String, unique:true},
    password: String,
    birthdate: Date,
    avatar: String,
    phone: {type: String, unique:true},
})

export default model<User>('User', userSchema)