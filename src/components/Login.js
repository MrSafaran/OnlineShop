import React, { useEffect, useState, useContext } from "react";
import styles from "../styles/Login.module.css";
import picture from "../assets/Login.svg";
import { validate } from "./validate";
import { Link, useNavigate } from "react-router-dom";

// Import Firebase
import { auth, db } from '../firebase/firebaseConfig';  // Ensure you have configured firebaseConfig.js
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

// Import UserContext
import { UserContext } from '../contexts/UserContextProvider';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [focus, setFocus] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setState } = useContext(UserContext);  // Access setState from UserContext

  useEffect(() => {
    setError(validate("Login", data));
  }, [data, focus]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setFocus({ ...focus, [event.target.name]: true });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
      setLoading(true);
      try {
        // Sign in with Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;

        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          // Store user data in context
          setState(userDoc.data());
        } else {
          console.log("No such document!");
        }

        alert("Login successful!");
        setLoading(false);

        // Navigate to the home page
        navigate('/home');

      } catch (error) {
        console.error("Error logging in:", error);
        alert("Invalid username or password. Please try again.");
        setLoading(false);
      }
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
            <div className={styles.formbuttons}>
              <button className={styles.submitbutton} disabled={loading}>
                {loading ? "در حال ورود..." : "ورود"}
              </button>
              <Link to="/Signup">ثبت نام</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
