import React, { useState } from 'react';
import styles from '../styles/‌BlurCards.module.css';

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
      <div className={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={styles.overlay}>
          <span>محصولات‌ دخترونه</span>
        </div>
      </div>
      <div className={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={styles.overlay}>
          <span>محصولات پسرونه</span>
        </div>
      </div>
    </div>
  );
};

export default BlurCards;
