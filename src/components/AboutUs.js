import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import styles from '../styles/AboutUs.module.css';

const AboutUs = () => {
  return (
    <>
        <Navbar/>
        <div className={styles.aboutUsContainer}>
        <h1>درباره هیلی‌لند</h1>
        <p>
            به هیلی‌لند خوش آمدید، جایی که تخیل با کیفیت ترکیب می‌شود! ما یک فروشگاه آنلاین اختصاصی هستیم که مجموعه‌ای گسترده از محصولات ویژه کودکان را ارائه می‌دهیم. ماموریت ما این است که شادی، خلاقیت و سرگرمی را به زندگی هر کودک بیاوریم از طریق اقلامی که با دقت انتخاب شده‌اند.
        </p>
        <div className={styles.aboutUsValues}>
            <h2>ارزش‌های ما</h2>
            <ul>
            <li><strong>خلاقیت:</strong> ما به پرورش خلاقیت و تخیل در هر کودک از طریق محصولات منحصربه‌فرد و سرگرم‌کننده خود اعتقاد داریم.</li>
            <li><strong>کیفیت:</strong> ما اطمینان می‌دهیم که تمامی محصولات ما مطابق با بالاترین استانداردهای ایمنی و دوام هستند.</li>
            <li><strong>مشتری مداری:</strong> ما اینجا هستیم تا از والدین و سرپرستان در یافتن محصولات ایده‌آل برای کودکانشان حمایت کنیم.</li>
            <li><strong>قیمت مناسب:</strong> ما محصولات باکیفیت را با قیمتی ارائه می‌دهیم که با بودجه هر خانواده‌ای هماهنگ است.</li>
            </ul>
        </div>
        <div className={styles.aboutUsStory}>
            <h2>داستان ما</h2>
            <p>
            هیلی‌لند با این باور تأسیس شد که هر کودکی شایسته مکانی است که بتواند در آن کاوش کند، بازی کند و رشد کند. سفر ما با یک ایده ساده آغاز شد - ایجاد یک فروشگاه همه‌کاره که والدین بتوانند همه چیزهایی را که کودکانشان نیاز دارند، از اسباب‌بازی‌ها و بازی‌ها گرفته تا مواد آموزشی و لباس، پیدا کنند. امروز ما مفتخریم که نامی قابل اعتماد برای خانواده‌ها در همه جا هستیم.
            </p>
        </div>
        </div>
        <Footer/>
    </>
  );
}

export default AboutUs;
