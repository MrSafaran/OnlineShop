import React, { useEffect, useState } from "react";
import styles from "../styles/Signup.module.css";
import picture from "../assets/signup.svg";
import { validate } from "../components/validate.js";
import { Link } from "react-router-dom";

// Import Firebase
import { auth, db } from '../firebase/firebaseConfig.js';  // Ensure you have configured firebaseConfig.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkPolicy: false,
  });

  const [error, setError] = useState({});
  const [focus, setFocus] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(validate("Signup", data));
  }, [data, focus]);

  const changeHandler = (event) => {
    if (event.target.name === "checkPolicy") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setFocus({ ...focus, [event.target.name]: true });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      setLoading(true);
      try {
        // Create user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;

        // Store additional user information in Firestore
        await setDoc(doc(db, "users", user.uid), {
          username: data.username,
          email: data.email,
          password : data.password,
        });

        alert("Signup successful!");
        setLoading(false);

      } catch (error) {
        console.error("Error signing up:", error);
        alert("Error signing up. Please try again.");
        setLoading(false);
      }
    } else {
      setFocus({
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
        checkPolicy: true,
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
            <h1>ایجاد حساب کاربری</h1>
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
              <label>ایمیل</label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {error.email && focus.email && (
                <span className={styles.errorSpan}>{error.email}</span>
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
            <div className={styles.inputContainer}>
              <label>تایید پسورد</label>
              <input
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              {error.confirmPassword && focus.confirmPassword && (
                <span className={styles.errorSpan}>
                  {error.confirmPassword}
                </span>
              )}
            </div>
            <div className={styles.divcheckboxContainer}>
              <div className={styles.divcheckbox}>
                <label>شرایط سیاست حفظ حریم خصوصی را بپذیرید.</label>
                <input
                  type="checkbox"
                  name="checkPolicy"
                  value={data.checkPolicy}
                  onChange={changeHandler}
                  onFocus={focusHandler}
                />
              </div>
              {error.checkPolicy && focus.checkPolicy && (
                <span className={styles.errorSpan}>{error.checkPolicy}</span>
              )}
            </div>
            <div className={styles.formbuttons}>
              <button className={styles.submitbutton} disabled={loading}>
                {loading ? "در حال ثبت نام..." : "ثبت نام"}
              </button>
              <Link to="/Login">ورود</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
