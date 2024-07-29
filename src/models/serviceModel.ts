import mongoose, { mongo } from "mongoose";
const serviceSchema = new mongoose.Schema({
    name:String,
    price:String,
    info:String
})

const serviceModel = mongoose.model("services",serviceSchema)
export default serviceModel