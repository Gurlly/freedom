
import { Carousel } from "flowbite-react";

import Item1 from '../resources/item-1.png'

const CarouselComponent = () => {
  return (
    <>
      <div className="h-96 md:h-[30rem] lg:h-[34rem] xl:h-[37rem] bg-zinc-100 carousel-shadow rounded-lg">
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
          src="https://scontent.fmnl33-1.fna.fbcdn.net/v/t39.30808-6/399478931_725125646317651_6254922721179777863_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gDLTj5EnfogQ7kNvgG4n7W6&_nc_ht=scontent.fmnl33-1.fna&oh=00_AYA1jpLCOhWu-cBJawQJ_9P9Krz-8nssPQXAYL7GfOtGdQ&oe=669FAB89" 
          className="h-full object-contain"
          alt="Item 3 - Anniversary" 
          />
        </Carousel>
      </div>
    </>
  )
}

export default CarouselComponent