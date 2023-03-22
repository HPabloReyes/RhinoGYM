import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  var settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className="img" src="img0.jpeg" alt="Image 1" />
        </div>
        <div>
          <img className="img" src="img1.jpg" alt="Image 2" />
        </div>
        <div>
          <img className="img" src="img2.jpg" alt="Image 3" />
        </div>
        <div>
          <img className="img" src="img3.jpg" alt="Image 4" />
        </div>
        <div>
          <img className="img" src="img4.jpg" alt="Image 4" />
        </div>
      </Slider>
    </div>
  );
}
