import React from "react";

const authContext = React.createContext({
    signUp: (details)=>{},
    isLoggedIn:false,
    login: (details)=>{},
    logout: ()=>{}
})

export default authContext;