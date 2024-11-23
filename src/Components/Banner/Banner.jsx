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
        }
      ];
      

    return (
        <>
            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                  {
                    slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                          <div className="h-[300px] w-full">
                            <img src={slide.img} alt={slide.title} className="object-cover w-full h-full" />
                          </div>
                          <div className="absolute bottom-0 w-full h-20 bg-black opacity-50">
                            <div className="flex justify-center items-center text-white px-6 py-4">
                              <h2 className="text-lg">{slide.title}</h2>
                              <p className="text-sm">{slide.subtitle}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                    ))
                  }
                </Swiper>
            </div>
        </>
    );
};

export default Banner;
