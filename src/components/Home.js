import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import landing from "../assets/Landing0.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Store from "./Store";
import ProductContextProvider from "../contexts/ProductContextProvider";
import BlurCards from "./BlurCards";


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.landingContainer}>
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
      </div>
      <div>
        <BlurCards/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
