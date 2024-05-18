import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CarouselData } from '../../../data/data';

// eslint-disable-next-line react/prop-types
export default function Carousel({setOpenLang}) {
  return (
    <div  onClick={()=>setOpenLang(false)} name="/" >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            CarouselData.map(Carousel=>(
                <SwiperSlide key={Carousel.id}>
                   <div className="imageContainer">
                        <img src={Carousel.image} alt="" />
                   </div>
                </SwiperSlide>
            ))
        }
        
      </Swiper>
    </div>
  );
}
