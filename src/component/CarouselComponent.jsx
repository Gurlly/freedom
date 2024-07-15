
import { Carousel } from "flowbite-react";

import Item1 from '../resources/item-1.png'

const CarouselComponent = () => {
  return (
    <>
      <div className="h-72 md:h-[30rem] lg:h-[38rem] shadow-lg bg-gray-400 shadow-stone-700 border border-stone-700 rounded-lg">
        <Carousel leftControl=" " rightControl=" " indicators={false}>
          <img 
          src={Item1} 
          alt="Item 1 - Hero Logo" 
          className="h-full object-contain"
          />
          <img 
          src="https://scontent.fcrk3-3.fna.fbcdn.net/v/t39.30808-6/399478931_725125646317651_6254922721179777863_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Gi7BWvdgIA4Q7kNvgEwqKoO&_nc_ht=scontent.fcrk3-3.fna&oh=00_AYAwT9rijSKnIi32-4POqHpZRaDP3AuW75TmcRM1LAl7JA&oe=6697C289" 
          className="h-full object-contain"
          alt="Item 2 - Recent Series" 
          />
          <img 
          src="https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/435879642_2210611649275981_4762557593541922084_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=3FYIGiEnOCYQ7kNvgFXnq_V&_nc_ht=scontent.fcrk3-1.fna&oh=00_AYA0dmH_xNXpXyWGUk5G78XfYPqp_44iPtV_sisONB88xg&oe=6697D325" 
          className="h-full object-contain"
          alt="Item 3 - Anniversary" 
          />
        </Carousel>
      </div>
    </>
  )
}

export default CarouselComponent