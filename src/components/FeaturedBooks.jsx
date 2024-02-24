import React from 'react'
import { FeatureBooks } from '../data'

export const FeaturedBooks = () => {
  return (
    <>
    <div className='my-20 mx-10'>
    <h2 className='text-center font-bold my-10'>Featured Books</h2>
    <swiper-container slides-per-view='6' autoplay="false" enabled="true" navigation="true">

        {
            FeatureBooks.map((book,i) => 
            <Swiper-slide >
                <div className=''>
                    <a href={book.id}> <img className='width-100px' src={book.book_cover} alt={book.title} /></a>
                <p className='font-semibold text-center my-2'>{book.selling_price}</p>
            </div>
            </Swiper-slide>
            
            )
        }
    </swiper-container>
    </div>
    </>
  )
}
