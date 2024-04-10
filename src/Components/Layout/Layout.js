
import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props)=>{
    return (
        <Fragment>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <MainNavigation />
                <div style={{marginLeft:'13%' ,width: '87%' }}>
                    {props.children}
                </div>
            </div>
        </Fragment>
    );
}

export default Layout;