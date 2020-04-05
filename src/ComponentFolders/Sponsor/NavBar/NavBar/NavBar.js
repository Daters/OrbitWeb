import React from "react"

import "./NavBar.css"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import Logo from "../../resources/Logo.png"

const NavBar = props => (
    <header className="toolbar">
        <nav className="navbar">
            <div className="navbar_logo"><a href="/"><img src={Logo} style={{width: "50px", height: "50px"}}/></a></div>
            <div className="spacer"></div>
            <div className="navbar_navigation-items">
                <ul>
                    <li><a href="/">Current Mission</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">The Team</a></li>
                    <li><a href="/">Sponsors</a></li>
                    <li><a href="/">Join</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        </nav>
    </header>
);

export default NavBar;