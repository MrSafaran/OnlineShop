import React from "react";
import styles from "../styles/Login.module.css";
import picture from "../assets/Login.svg";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.MainWrapper}>
        <div className={styles.leftSide}>
          <img src={picture} />
          <div className={styles.leftSideBg}></div>
        </div>

        <div className={styles.RightSide}>
          <form className={styles.form}>
            <h1>ورود به حساب کاربری</h1>
            <div className={styles.inputContainer}>
              <label>نام کاربری</label>
              <input type="text" />
              {<span>خطا</span>}
            </div>
            <div className={styles.inputContainer}>
              <label>پسورد</label>
              <input type="password" />
              {<span>خطا</span>}
            </div>
            <div className={styles.formbuttons}>
              <button className={styles.submitbutton}>ورود</button>
              <a href="#">ثبت نام</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
