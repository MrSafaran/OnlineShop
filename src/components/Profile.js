import React, { useContext } from 'react';
import UserContext from '../contexts/UserContextProvider';
import styles from '../styles/Profile.module.css';

const Profile = () => {

    const {user} = useContext(UserContext);


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.profile_user}><i class="fa-solid fa-user"></i></div>
                <p>نام‌کاربری: {user.username}</p>
                <p>ایمیل: {user.email}</p>
                <p>رمزعبور: {user.password}</p>
                <button>خروج</button>
            </div>
        </div>
    );
};

export default Profile;