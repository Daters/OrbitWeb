//Import all paths to the Router here!

import React from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Mission from './ComponentFolders/Mission/Mission'
import E404 from "./ComponentFolders/E404/E404"
import Main from "./ComponentFolders/Main/Main"
import About from "./ComponentFolders/AboutUs/About"
import TheTeam from "./ComponentFolders/TheTeam/TheTeam"
import Footer from "./ComponentFolders/Footer/Footer"

/*import MainMenu from './ComponentFolders/Header/MainMenu';*/


//Main app Routing
function App() {
  return (
      <div className = "AppDiv">
      <Router>
          {/*<MainMenu/> Put a Header on each individual page to avoid div conflicts*/}
         <Switch>
          <Route exact path = {"/"} component = {Main}/>
          <Route path = {"/about"} component = {About}/>
          <Route path = {"/mission"} component = {Mission}/>
          <Route path = {"/team"} component = {TheTeam}/>
          <Route component = {E404}/>

          {/*
          <Footer/>
          Add footer here?? */}
        
        </Switch>
      </Router>
      </div>
  );
}

export default App;




/* This is a function that logs to the console if you are on mobile or PC 

function testMobileOrPC() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        console.log("Mobile?")
    }
    else{
        console.log("PC?")
    }
}
*/