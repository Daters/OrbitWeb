import Header from "./Header"
import MobHeader from "./MobileMenu"
import React from "react"
import ReactDOM from "react-dom"
//import render from "react-dom"

/* 
This is the component that determines if you are viewing it trough a mobile og desktop 
browser. It serves 2 different menus (Header and MobileMenu) relative to the browser.
*/

const MainMenu = () => (
    <div>
        {decideMenuOnSize()}

    </div>
);




function decideMenuOnSize() {
    
    const width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    
    if (width < 852){
        console.log("Discovered website is viewed from a mobile browser, showing mobile menu")
        return <MobHeader/>
    }
    else {
        console.log("Discovered website is viewed from a desktop browser, showing desktop menu")
        return <Header/>    
    }
    /*
    */
   
   /*
class MainMenu extends React {
    // scrWi = this(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth).bind(this);
    constructor(props) {
        super(props)
        this.handleWidth    
    }

    handleWidth() {

        if ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth).bind(this) > 852) {
            return(
                <div>
                    <MobHeader/>
                </div>
                    )
                }
                else {
                    return(
                        <div>
                            <Header/> 
                        </div>
                        )
                    }
                }

    render() {
        return(
            this
        );
    };
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@22

    
    constructor(props) {
        super(props);
        this.state = { width: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        if (this.updateWindowDimensions > 852) {
            return (
                <MobHeader/>
                )
            }
            else {
            return (
                <Header/>
                )
            }
        }
        
        
      componentDidMount() {
          this.updateWindowDimensions();
          window.addEventListener('resize', this.updateWindowDimensions);
        }
        
        componentWillUnmount() {
            window.removeEventListener('resize', this.updateWindowDimensions);
        }
        
        updateWindowDimensions() {
            this.setState({ width: window.innerWidth});
        }
        
        
    }
    */                
    
    // };
    
    
    /*
    */  
};





export default MainMenu;

//The function under serves a menu based on the OS of the viewing browser, figured screen size is better
//feel free to change it up

/*
function decideMenu() {
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    //scre
        {
        console.log("Discovered website is viewed from a mobile browser, showing mobile menu")
        return <MobHeader/>
        }
    else {
        console.log("Discovered website is viewed from a desktop browser, showing desktop menu")
        return <Header/>    
    }
};
*/