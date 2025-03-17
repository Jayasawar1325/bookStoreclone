import { Book } from "../models/book.model.js";
export const getBooks = async(req,res)=>{
    try{
        const book= await Book.find()
        res.status(200).json({
            message:'Get all books',
            book
        })
    }
    catch(err){
        console.log('Error getting books:',err)
    }
}