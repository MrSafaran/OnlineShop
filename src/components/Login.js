import React, { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import picture from "../assets/Login.svg";
import { validate } from "./validate";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [focus, setFocus] = useState({});

  useEffect(() => {
    setError(validate("Login", data));
  }, [data, focus]);

  const changeHandler = (event) => {
      setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setFocus({ ...focus, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      //toastify
    } else {
      setFocus({
        username: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.MainWrapper}>
        <div className={styles.leftSide}>
          <img src={picture} />
          <div className={styles.leftSideBg}></div>
        </div>

        <div className={styles.RightSide}>
          <form className={styles.form} onSubmit={submitHandler}>
            <h1>ورود به حساب کاربری</h1>
            <div className={styles.inputContainer}>
              <label>نام کاربری</label>
              <input
                type="text"
                name="username"
                value={data.username}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {error.username && focus.username && (
                <span className={styles.errorSpan}>{error.username}</span>
              )}
            </div>
            <div className={styles.inputContainer}>
              <label>پسورد</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {error.password && focus.password && (
                <span className={styles.errorSpan}>{error.password}</span>
              )}
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
