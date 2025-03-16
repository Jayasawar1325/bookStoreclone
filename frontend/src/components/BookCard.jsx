import React from 'react'

const BookCard = ({book}) => {
  return (
    <div>
      <div className="card bg-base-100 w-84 my-6 shadow-sm h-full dark:bg-slate-900 dark:text-white border">
        <figure>
          <img
            src={book.image}
            alt="Shoes"
            className="h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <h2 className="card-title">
            {book.name}
            <div className="badge badge-secondary">{book.category}</div>
          </h2>
          <p>{book.title}</p>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline ">${book.price}</div>
            <div className="badge badge-outline hover:text-white hover:bg-pink-500 p-3">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookCard