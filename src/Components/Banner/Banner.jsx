import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';
import { Pagination } from 'swiper/modules';

const Banner = () => {

  const slidesData = [
    {
      id: 1,
      title: "Stronger callgen, plumer skin",
      subtitle: "This is the first slide.",
      img: "https://i.ibb.co.com/fD8gcXg/bg-slider3-1.png"
    },
    {
      id: 2,
      title: "Slide Two",
      subtitle: "This is the second slide.",
      img: "https://i.ibb.co.com/fD8gcXg/bg-slider3-1.png"
    },
    {
      id: 3,
      title: "Slide Three",
      subtitle: "This is the third slide.",
      img: "https://i.ibb.co.com/fD8gcXg/bg-slider3-1.png"
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
                <div className="h-[370px] w-full bgImgSlider bg-[#f9f6f1]">
                  <div className="absolute bottom-0 w-full h-20 opacity-50">
                    <div className="flex justify-center items-center text-white px-6 py-4">
                      <h2 className="text-lg">{slide.title}</h2>
                      <p className="text-sm">{slide.subtitle}</p>
                    </div>
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
