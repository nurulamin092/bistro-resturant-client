import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <section className="my-24">
      <SectionTitle
        subHeading={`what our client say`}
        heading={`Testimonial`}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
