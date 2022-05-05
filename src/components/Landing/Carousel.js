import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Image } from '@chakra-ui/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
    return(
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            >
                <SwiperSlide
                
                >
                    <Image
                    mx="auto"
                    src="https://www.ram.com.ar/content/dam/cross-regional/latam/ramtrucks/es_ar/ramtrucks/2018_05/2017_Ram_1500_Desert2.jpg.img.1440.jpg"
                    alt="ram"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                    mx="auto"
                    src="https://www.ram.com.ar/content/dam/cross-regional/latam/ramtrucks/es_ar/ramtrucks/2018_05/2017_Ram_1500_Desert2.jpg.img.1440.jpg"
                    alt="ram"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                    mx="auto"
                    src="https://www.ram.com.ar/content/dam/cross-regional/latam/ramtrucks/es_ar/ramtrucks/2018_05/2017_Ram_1500_Desert2.jpg.img.1440.jpg"
                    alt="ram"
                    />
                </SwiperSlide>
            </Swiper>
    )
}

export default Carousel