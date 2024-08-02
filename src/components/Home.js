import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import landing from "../assets/Landing0.jpg";
import { Link } from "react-router-dom";
import ProductSlider from "./ProductSlider";

const sampleProducts = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "Product 1",
    age: 2,
    price: 100,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Product 2",
    age: 1,
    price: 200,
  },
  // Add more sample products
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.landing}>
        <img src={landing} alt="Landing" className={styles.landingImg} />
        <div className={styles.landingContent}>
          <h1>به هیلی لند خوش آمدید</h1>
          <p>مقصد نهایی شما برای محصولات شگفت انگیز</p>
          <Link to="/products" className={styles.landingButton}>
            !خرید کنید
          </Link>
        </div>
      </div>

      <div className={styles.ProductSlider}>

      </div>
    </div>
  );
};

export default Home;
