import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar11.webp";
import AVATAR2 from "../../assets/avatar22.webp";
import AVATAR3 from "../../assets/avatar33.jpg";
import AVATAR4 from "../../assets/avatar44.jpg";


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
    name: "SpongeBob",
    review:
      "I’m ugly and I’m proud! I’ll have you know that I stubbed by toe last week and only cried for 20 minutes. ",
  },
  {
    avatar: AVATAR2,
    name: "Chandler Bing",
    review:
      "Rotem Ezra Could you be anymore good programmer",
  },
  {
    avatar: AVATAR3,
    name: "Gili Rid",
    review:
      "I'm still looking for who stole my snowball Rotem I know it's you!",
  },
  {
    avatar: AVATAR4,
    name: "Freddie Nice to Meet",
    review:
      "I am the number one promoter in Israel, of the number one programmer in Israel, if by chance she is not in Israel then she is abroad and then she is number one abroad. Freddie Nice to Meet.",
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
              <h5 className="client__name">{name}</h5>
              <small className="clients__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
