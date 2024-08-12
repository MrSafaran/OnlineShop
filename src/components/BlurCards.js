import React, { useState } from 'react';
import styles from '../styles/‌BlurCards.module.css';
import { Link } from 'react-router-dom';

const BlurCards = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`${styles.cardContainer} ${isHovered ? styles.blur : ''}`}>
      <Link
        to="/products?category=girl"
        className={styles.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.overlay}>
          <span>محصولات دخترونه</span>
        </div>
      </Link>
      <Link
        to="/products?category=boy"
        className={styles.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.overlay}>
          <span>محصولات پسرونه</span>
        </div>
      </Link>
    </div>
  );
};

export default BlurCards;
