import { Fragment } from "react";
import EmailNav from "./EmailNav";

const EmailLayOut = (props) => {
    return (
        <Fragment>
            <div style={{ display: 'flex' }}>
                <EmailNav />
                <div style={{ marginLeft: '13%', width: '87%' }}>
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}

export default EmailLayOut;