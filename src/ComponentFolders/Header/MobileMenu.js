import React, {Component} from "react"
import "./MobileMenu.css"
import {Link} from "react-router-dom"


class MobileMenu extends Component{

    constructor(props) {
        super()

        this.state = {
            /* Stuff, useState */
            text : "Text"
        }
    }

    ShowHide() {
        let MobileMenu = document.getElementsByClassName("MobileMenu")[0]
        let Innhold = document.getElementsByClassName("HiddenByMenu")[0]
        {/*
            Doc. className "HiddenByMenu" is to set opacity of the page content to 0 to avoid
            content overlapping with the men. It has to do with position properties (position: absolute)
    */}
        
        
        if (MobileMenu.style.width === "100%")  {
            
            MobileMenu.style.width = "0%"
            MobileMenu.style.opacity = "0"

            Innhold.style.width = "100%"
        }

        else {
            MobileMenu.style.width = "100%"
            MobileMenu.style.opacity = "1"
            MobileMenu.style.transition =  "width 1s, opacity 1s";

            Innhold.style.width = "0%"
        }
    }


    render() {
        return(
            <React.Fragment>
                <div className = "MobileMenu">
                    <div className = "buttonP">
                        <button className = "button" onClick = {() => this.ShowHide()}>
                            X
                        </button>
                    </div>

                    <div className = "Choices">
                        
                        <Link to = "/" style ={{textDecoration : "none", color: "#dddddd"}}><h1>Main</h1></Link>
                        
                        <Link to = "/mission" style ={{textDecoration : "none", color: "#dddddd"}}><h1>Current Mission</h1></Link>
                        
                        <Link to = "/about" style ={{textDecoration : "none", color: "#dddddd"}}><h1>About Us</h1></Link>
                        
                        <Link to = "/team" style ={{textDecoration : "none", color: "#dddddd"}}><h1>The Team</h1></Link>
                        
                        <Link to = "/#" style ={{textDecoration : "none", color: "#dddddd"}}><h1>Sponsors</h1></Link>
                        
                        <Link to = "/#" style ={{textDecoration : "none", color: "#dddddd"}}><h1>Join</h1></Link>
                    
                        <Link to = "/#" style ={{textDecoration : "none", color: "#dddddd"}}><h1>Contact</h1></Link>
                    </div>
                </div>


                    <div className = "buttonP">
                    <button className = "button" onClick = {() => this.ShowHide()}>
                        Menu
                    </button>
                    </div>
             </React.Fragment>
        )
    }
}



/*
var a = "test";

const MobileMenu = () => (
    <div className = "MobileMenu0">
        <div className = "MenuHeader" onClick = "Click()">
            {a}
        </div>
    </div>
);



function Click() {
    
}
*/


export default MobileMenu;