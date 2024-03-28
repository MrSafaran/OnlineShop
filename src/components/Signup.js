import React from "react";
import styles from "../styles/Signup.module.css";
import picture from "../assets/signup.svg";

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.MainWrapper}>
        <div className={styles.leftSide}>
          <img src={picture} />
          <div className={styles.leftSideBg}></div>
        </div>

        <div className={styles.RightSide}>
          <form className={styles.form}>
            <h1>ایجاد حساب کاربری</h1>
            <div className={styles.inputContainer}>
              <label>نام کاربری</label>
              <input type="text" />
            </div>
            <div className={styles.inputContainer}>
              <label>ایمیل</label>
              <input type="text" />
            </div>
            <div className={styles.inputContainer}>
              <label>پسورد</label>
              <input type="password" />
            </div>
            <div className={styles.inputContainer}>
              <label>تایید پسورد</label>
              <input type="password" />
            </div>
            <div className={styles.divcheckbox}>
              <label>شرایط سیاست حفظ حریم خصوصی را بپذیرید.</label>
              <input type="checkbox" />
            </div>
            <div className={styles.formbuttons}>
              <button className={styles.submitbutton}>ثبت نام</button>
              <a href="#">ورود</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
