import React from 'react';
import styles from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h4>تماس با ما</h4>
            <p>ایمیل: info@hilyland.com</p>
            <p>تلفن:1234-567-890</p>
            <p>آدرس : تهران، خیابان ولیعصر، پلاک ۱۰۲</p>
          </div>
          <div className={styles.column}>
            <h4>لینک‌های سریع</h4>
            <ul className={styles.links}>
              <li><Link to="/about">درباره ما</Link></li>
              <li><Link to="/products">محصولات</Link></li>
              <li><Link to="/contact">تماس</Link></li>
              <li><Link to="/faq">سوالات متداول</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>ما را دنبال کنید</h4>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className={styles.column}>
            <h4>خبرنامه</h4>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="آدرس ایمیل شما" required />
              <button type="submit">اشتراک</button>
            </form>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <p>&copy; 2024 فروشگاه آنلاین. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
