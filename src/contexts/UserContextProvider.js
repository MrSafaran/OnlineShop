import React, { createContext, useContext, useState } from 'react';
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { setUserId } from 'firebase/analytics';


const UserData = createContext();

const UserContextProvider = (props) => {

    [userInfo , setUserInfo] = useState();


    return (
        <UserData.Provider value={{userInfo , setUserInfo}}>
            {props.children}
        </UserData.Provider>
    );
};

export default UserContextProvider;