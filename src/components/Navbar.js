import React from "react";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_brand}>
        <a href="/">
          <i className="fas fa-store"></i>
          فروشگاه هیلی‌لند
        </a>
      </div>
      <button
        className={`${styles.navbar_toggle} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
      <ul className={`${styles.navbar_nav} ${isOpen ? styles.open : ""}`}>
        <li className={styles.nav_item}>
          <a href="/home">
            <i className="fas fa-home"></i>
            خانه
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="/products">
            <i className="fas fa-box"></i>
            محصولات
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="/about">
            <i className="fas fa-info-circle"></i>
            درباره ما
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="/contact">
            <i className="fas fa-envelope"></i>
            ارتباط با ما
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="/cart">
            <i className="fas fa-shopping-cart"></i>
            سبدخرید
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="/login">
            <i className="fas fa-user"></i>
            ورود
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="/signup">
            <i className="fas fa-user-plus"></i>
            ثبت نام
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
