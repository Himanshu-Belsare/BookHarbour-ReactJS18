import React from 'react'
import Swiper from 'swiper'
import { Books,Authors } from '../data' 

export const Hero = () => {
  return (
    <>
        <div className='mt-16 mx-10 md:mx-40 flex gap-28'>
            <div>
                <h1  className='text-7xl font-bold mb-10'>Unlock worlds, <br/>turn pages...</h1>
                <p className='text-x1'>"Journey through the pages, find solance in the words, and let the story within shape your world."</p>
            </div>
        <div className='w-72'>
            <Swiper-container effect="cards" autoplay="true">
                {
                    Books.map((book,i) => (
                        <swiper-slide>
                            <img src={book.book_cover} alt={book.title} width="200px"/>
                        </swiper-slide>
                    )
                    )
                }
            </Swiper-container>
        </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D3D9D5" fillOpacity="1" 
        d="M0,192L48,170.7C96,149,192,107,288,101.3C384,96,480,128,576,144C672,160,768,160,864,133.3C960,
        107,1056,53,1152,58.7C1248,64,1344,128,1392,160L1440,192L1440,320L1392,320C1344,320,1248,320,1152,
        320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,
        320Z"></path></svg> 

    </>
  )
}




