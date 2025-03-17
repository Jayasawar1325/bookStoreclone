import mongoose, {Schema} from 'mongoose'
const bookSchema = new Schema({
    name:String,
    price:Number,
    image:String,
    title:String,
    category:String
},{timestamps:true})
export const Book = mongoose.model('Book',bookSchema)