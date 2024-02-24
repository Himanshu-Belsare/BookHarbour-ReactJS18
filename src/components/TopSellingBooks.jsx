import Swiper from "swiper"
import { Books } from "../data"

export const TopSellingBooks = () => {
  return (
    <>
    <div className="mx-20 my-10">
    <h1 className="font-bold text-center my-10 mb-5">Top Selling Images</h1>
    <swiper-container slides-per-view='6' autoplay="true" enabled="true">
        {
            Books.map((book,i) => (
                <Swiper-slide>
                    <div className="flex flex-col item-center">
                        <a href={book.id}>
                        <img src={book.book_cover} alt={book.title} className="width-100px"/>
                        </a>
                   
                    <h5 className="font-semibold text-center my-2">Rs.{book.price}</h5>
                </div>
                </Swiper-slide>
                
                
            )
            )
        }
    </swiper-container>
    </div>
    
    </>
    
  )
}
