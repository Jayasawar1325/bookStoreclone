import express from 'express'
import cookieParser from 'cookie-parser'
import { authRouter } from './routers/auth.route.js';
import { bookRouter } from './routers/book.route.js';
import cors from 'cors';
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
app.use(cookieParser())
app.use('/api/v1/auth',authRouter)
app.use('/api/v1',bookRouter)
export {app}