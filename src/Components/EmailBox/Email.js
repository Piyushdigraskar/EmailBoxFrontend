import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmail } from "../../Store/redux/Email";
import { Link } from "react-router-dom";
import classes from "./Email.module.css";

const Email = () => {
    const dispatch = useDispatch();
    const mailId = localStorage.getItem("currentEmailId");
    const email = useSelector((state) => state.email.emails[0] || []);
    useEffect(() => {
        if (mailId) {
            dispatch(getEmail(mailId));
        }
        else{
            localStorage.removeItem("currentEmailId"); // Remove the email _id from localStorage when leaving the Email component
        };
    }, [dispatch,mailId]);

    console.log("Email Rerendering",email);
    return (
        <div className={classes.emailContainer}>
            <Link to='/inbox'><h3>All Mails</h3></Link>
            <h2 className={classes.emailHeader}>Email</h2>
            <div className={classes.emailContent}>
                <div><h2>
                    <b>
                        To: {email.to}
                    </b>
                </h2>
                </div>
                <div>
                    <h3>
                        <b>
                            Subject: {email.subject}
                        </b>
                    </h3>
                </div>
                <div className={classes.content}>
                <p>{email.content}</p>
                </div>
            </div>
        </div>
    );
};

export default Email;
