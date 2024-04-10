import React, { useContext } from "react";
import classes from './EmailNav.module.css';
import { Link } from 'react-router-dom';
import authContext from "../../Store/Context/AuthContext";

const EmailNav = () => {
    const authCtx = useContext(authContext);
    return (
        <header className={classes.header}>
            <nav>
                {authCtx.isLoggedIn && <Link to='/home'>
                    <div className={classes.logo}>Options</div>
                </Link>}
                <ul>
                    {authCtx.isLoggedIn && <li>
                        <Link to='/compose'>Compose</Link>
                    </li>}
                    {authCtx.isLoggedIn && <li>
                        <Link to='/sent'>Sent</Link>
                    </li>}
                </ul>
            </nav>
        </header>
    );
}

export default EmailNav;