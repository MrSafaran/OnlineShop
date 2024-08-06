import React, { useContext } from "react";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

//context
import { CartContext } from "../contexts/CartContextProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_brand}>
        <Link to="/">
          <i className="fas fa-store"></i>
          فروشگاه هیلی‌لند
        </Link>
      </div>
      <button
        className={`${styles.navbar_toggle} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
      <ul className={`${styles.navbar_nav} ${isOpen ? styles.open : ""}`}>
        <li className={styles.nav_item}>
          <Link to="/home">
            <i className="fas fa-home"></i>
            خانه
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/products">
            <i className="fas fa-box"></i>
            محصولات
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/about">
            <i className="fas fa-info-circle"></i>
            درباره ما
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/contact">
            <i className="fas fa-envelope"></i>
            ارتباط با ما
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            سبدخرید
            <span>{state.itemsCounter}</span>
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/login">
            <i className="fas fa-user"></i>
            ورود
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link to="/signup">
            <i className="fas fa-user-plus"></i>
            ثبت نام
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
