import React from 'react'
import BookCard from './BookCard'
import { Link } from 'react-router'
import axios from 'axios'
import {useState,useEffect} from 'react'
const Course = () => {
  const [books,setBooks] = useState([])
  useEffect(()=>{
    const getData = async () =>{
      try{
        const res = await axios.get('http://localhost:4001/api/v1/book')
        console.log(res)
        setBooks(res.data.book)
      } catch(err){
        console.log(err)
      }
    }

    getData();

  },[])
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 flex flex-col items-center justify-center text-center'>
            <h1 className='text-3xl'>
                We're delighted to have <span className='text-pink-600'> you here:)</span>
            </h1>
            <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aperiam cupiditate accusamus facilis quidem illo placeat esse numquam, error eum autem sit nemo harum? Delectus ut porro consectetur non expedita.</p>
      <Link to = "/"> <button className='text-white bg-pink-600 px-4 py-2 rounded-md mt-4 cursor-pointer'>Back</button></Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 my-10'>
            {books.map((book)=>(
                <BookCard key={book.id} book={book}/>
            ))}
        </div>
    </div>
  )
}

export default Course