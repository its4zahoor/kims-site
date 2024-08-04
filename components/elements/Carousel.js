import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    arrows: false,
    centerMode: true,
    adaptiveHeight: true,
    beforeChange: (current, next) => {
      console.log(next), setSlideIndex(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardContent = [
    {
      description:
        "At KIN, I find exciting prospects in diploma programs like Certified Nursing Assistant (CNA). These courses offer practical skills for a fulfilling healthcare career. Real-world focus and well-rounded experience ensure success and a rewarding journey.",
      name: "Muhammad Sheryar",
    },
    {
      description:
        "I'm studying Post-Registered Nursing (Post-RN) at KIN. This program teaches essential skills for a successful healthcare career. KIN prioritizes quality education, global partnerships, and experienced teachers. This prepares me for leadership in healthcare worldwide.",
      name: "Muhammad Abdullah",
    },
    {
      description:
        "At KIMS, the Category B Pharmacy program gives practical skills for different healthcare roles, setting us up for success.",
      name: "Asfand Yar Khan",
    },
    {
      description:
        "I'm studying Post-Registered Nursing (Post-RN) at KIN. This program teaches essential skills for a successful healthcare career. KIN prioritizes quality education, global partnerships, and experienced teachers. This prepares me for leadership in healthcare worldwide.",
      name: "Muhammad Abdullah",
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cardContent.map((content, index) => (
          <CarouselCard
            description={content.description}
            name={content.name}
            key={index}
            className={index === slideIndex ? "slide-active slide" : "slide "}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
