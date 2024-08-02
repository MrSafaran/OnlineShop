import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard'; // Adjust import path if needed
import styles from '../styles/ProductSlider.module.css'; // Import the CSS module

const ProductSlider = ({ products = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            id={product.id}
            age={product.age}
            price={product.price}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
