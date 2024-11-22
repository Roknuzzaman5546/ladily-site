import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';
import { Pagination } from 'swiper/modules';



const Banner = () => {

    const slidesData = [
        {
          id: 1,
          title: "Slide One",
          subtitle: "This is the first slide.",
          img: "https://via.placeholder.com/800x300?text=Slide+1"
        },
        {
          id: 2,
          title: "Slide Two",
          subtitle: "This is the second slide.",
          img: "https://via.placeholder.com/800x300?text=Slide+2"
        },
        {
          id: 3,
          title: "Slide Three",
          subtitle: "This is the third slide.",
          img: "https://via.placeholder.com/800x300?text=Slide+3"
        },
        {
          id: 4,
          title: "Slide Four",
          subtitle: "This is the fourth slide.",
          img: "https://via.placeholder.com/800x300?text=Slide+4"
        },
        {
          id: 5,
          title: "Slide Five",
          subtitle: "This is the fifth slide.",
          img: "https://via.placeholder.com/800x300?text=Slide+5"
        }
      ];
      

    return (
        <>
            <div className=' mt-40'>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Banner;
