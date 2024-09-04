import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slideImg1 from "../../../assets/home/slide1.jpg";
import slideImg2 from "../../../assets/home/slide2.jpg";
import slideImg3 from "../../../assets/home/slide3.jpg";
import slideImg4 from "../../../assets/home/slide4.jpg";
import slideImg5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={`From 11.00am to 10.00pm`}
        heading={`Order Online`}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slideImg1} alt="" />
            
          <h3 className="text-4xl uppercase   text-white text-center -mt-12">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg2} alt="" />
          <h3 className="text-4xl uppercase   text-white text-center -mt-12">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg3} alt="" />
          <h3 className="text-4xl uppercase   text-white text-center -mt-12">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg4} alt="" />
          <h3 className="text-4xl uppercase   text-white text-center -mt-12">
            Cake
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg5} alt="" />
          <h3 className="text-4xl uppercase    text-center -mt-12  text-white">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
