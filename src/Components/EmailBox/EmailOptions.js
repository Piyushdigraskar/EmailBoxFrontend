import EmailLayOut from "../Layout/EmailLayOut";
import WelcomeEmailPage from "../../Pages/WelcomeEmailPage";
import { Switch, Route } from 'react-router-dom';
import authContext from "../../Store/Context/AuthContext";
import LoginPage from "../../Pages/LoginPage";
import EmailComposerPage from "../../Pages/EmailComposerPage";
import { useContext } from "react";

const EmailOptions = ()=>{
    const authCtx = useContext(authContext);
    const isLoggedIn = authCtx.isLoggedIn;
    return (
        <EmailLayOut>
            <Switch>
            <Route path='/home' exact>
                    {isLoggedIn ? <WelcomeEmailPage /> : <LoginPage />}
                </Route>
            <Route path='/createEmail'>
                    {isLoggedIn ? <EmailComposerPage /> : <LoginPage />}
                </Route>
            </Switch>
        </EmailLayOut>
    );
}

export default EmailOptions