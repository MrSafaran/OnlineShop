import React from 'react';
import styles from '../styles/ProductCard.module.css'; // Import the CSS module

const ProductCard = ({ image, name, id, age, price }) => {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productId}>ID: {id}</p>
        <p className={styles.productAge}>Age: {age}</p>
        <p className={styles.productPrice}>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
