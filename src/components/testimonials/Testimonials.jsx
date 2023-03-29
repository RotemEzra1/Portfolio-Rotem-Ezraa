import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from "swiper";

const data = [
  {
    avatar: AVATAR1,
    name: "Rotem Ezra",
    review:
      "Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra ",
  },
  {
    avatar: AVATAR2,
    name: "Rotem Ezra",
    review:
      "Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra ",
  },
  {
    avatar: AVATAR3,
    name: "Rotem Ezra",
    review:
      "Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra ",
  },
  {
    avatar: AVATAR4,
    name: "Ke Pasa Amigo",
    review:
      "Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        pagination={true}
        modules={[Navigation, Pagination]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}r</h5>
              <small className="clients__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
