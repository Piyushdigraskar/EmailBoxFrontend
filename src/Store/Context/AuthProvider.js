
import authContext from "./AuthContext";
import { useState } from "react";
const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Check if token exists in localStorage
        const token = localStorage.getItem('token');
        return !!token; // Return true if token exists, false otherwise
    });
    const signUpHandler = async (details) => {
        try {
            const response = await fetch(`http://localhost:4000/user/signup`, {
                method: "POST",
                body: JSON.stringify(details),
                headers: {
                    'content-type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error('failed to post signup details!')
            }
            else {
                console.log('User successFully signed up');
            }

        } catch (error) {
            console.log(error);
        }
    }

    const loginHandler = async (details) => {
        try {
            const response = await fetch(`http://localhost:4000/user/login`, {
                method: 'POST',
                body: JSON.stringify(details),
                headers: {
                    'content-type': 'application/json'
                }
            })

            if (!response.ok) {
                throw new Error('failed to post Login details!')
            }
            else {
                const responseData = await response.json(); // Extract JSON response
                const token = responseData.token; // Access token from response
                if (token) {
                    localStorage.setItem('token', token);
                    setIsLoggedIn(true); // Set token in localStorage
                   
                } else {
                    console.log("No token");
                }
                console.log("user successfully logged in");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    }

    const AuthValue = {
        signUp: signUpHandler,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <authContext.Provider value={AuthValue}>
        {props.children}
    </authContext.Provider>
}

export default AuthProvider;