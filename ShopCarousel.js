
import React from 'react';
import Slider from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';



  const ShopCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
  
};
  const shops = [ 
    { name: "Max", image: "/images/max.jpeg" },
    { name: "Trends", image: "/images/trends.png" },
    { name: "Tarang", image: "/images/tarang.jpeg" },
    { name: "Soch", image: "/images/soch.jpeg" },
  ];

  return (
    <div className="carousel-container">
    <Slider {...settings}>
      {shops.map((shop, index) => (
        <div key={index} className="carousel-slide">
          <img src={shop.image} alt={shop.name} className="carousel-image" />
          <h3>{shop.name}</h3>
        </div>
      ))}
    </Slider>
  </div>
  );
};
export default ShopCarousel;