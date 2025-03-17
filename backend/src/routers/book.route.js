import { Router } from "express";
import { getBooks } from "../controllers/book.controller.js";
const bookRouter = Router()
bookRouter.get('/book',getBooks)
export {bookRouter}