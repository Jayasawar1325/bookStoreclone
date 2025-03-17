import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useState,useEffect} from 'react'
import axios from 'axios';
import BookCard from './BookCard';
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const FreeBooks = () => {
    const [books,setBooks] = useState([])
  useEffect(()=>{
    const getData = async () =>{
      try{
        const res = await axios.get('http://localhost:4001/api/v1/book')
        setBooks(res.data.book.filter((book)=>book.category=='Free'))
      } catch(err){
        console.log(err)
      }
    }

    getData();

  },[])
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-8 dark:bg-slate-900 dark:text-white'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Limited Courses</h1>
        </div>
<Slider {...settings}>
      {books.map((book)=>(
        <BookCard key={book.id} book={book}/>
      ))}
    </Slider>
    </div>
  )
}

export default FreeBooks