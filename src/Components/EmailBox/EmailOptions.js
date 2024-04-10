import EmailLayOut from "../Layout/EmailLayOut";
import WelcomeEmailPage from "../../Pages/WelcomeEmailPage";
import { Route, Routes } from 'react-router-dom';
import authContext from "../../Store/Context/AuthContext";
import LoginPage from "../../Pages/LoginPage";
import EmailComposerPage from "../../Pages/EmailComposerPage";
import { useContext } from "react";

const EmailOptions = () => {
    const authCtx = useContext(authContext);
    const isLoggedIn = authCtx.isLoggedIn;
    return (
        <EmailLayOut>
            <Routes>
                <Route path='/home' element={isLoggedIn ? <WelcomeEmailPage /> : <LoginPage />}></Route>
                <Route path='/compose' element={isLoggedIn ? <EmailComposerPage /> : <LoginPage />}></Route>
            </Routes>
        </EmailLayOut>
    );
}

export default EmailOptions