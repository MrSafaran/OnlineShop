import React from 'react';
import styles from '../styles/ContactUs.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <>
        <Navbar/>
        <div className={styles.contactUsContainer}>
            <h1>تماس با ما</h1>
            <p>
                اگر سوالی دارید یا نیاز به کمک دارید، لطفاً با ما تماس بگیرید. ما اینجا هستیم تا به شما کمک کنیم!
            </p>
            <div className={styles.contactDetails}>
                <h2>اطلاعات تماس</h2>
                <ul>
                <li><strong>ایمیل:</strong> info@hilyland.com</li>
                <li><strong>تلفن:</strong> 1234-567-890</li>
                <li><strong>آدرس:</strong> تهران، خیابان ولیعصر، پلاک ۱۰۲</li>
                </ul>
            </div>
            <div className={styles.contactForm}>
                <h2>فرم تماس</h2>
                <form>
                <div className={styles.formGroup}>
                    <label htmlFor="name">نام:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">ایمیل:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">پیام:</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>ارسال</button>
                </form>
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default ContactUs;
