import React from "react"

import "./SideDrawer.css"

const sideDrawer = props => {

    let drawerClasses = "side-drawer";
    if(props.show){
        drawerClasses = "side-drawer open"
    }

    return (<nav className={drawerClasses}>
        <ul>
            <li><a href="/">Current Mission</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">The Team</a></li>
            <li><a href="/">Sponsors</a></li>
            <li><a href="/">Join</a></li>
            <li><a href="/">Contact Us</a></li>
        </ul>
    </nav>
    )
};

export default sideDrawer;