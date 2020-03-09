import React from 'react'
import "./About.css"
import MainMenu from "../Header/MainMenu"
import Footer from "../Footer/Footer"

//Images:
import TeamPicture from "./Gruppebilde-800x366.jpg"
import BigLogo from "./Orbit-logo-Big-800x752.png"
import SatPic from "./selfiesat_quarter_res_7276x4842-2-800x532.png"

//import Footer from "../Footer/Footer"

//Create a component that serves pictures depending on if viewed through a mobile browser


const About = () => (<React.Fragment>
    <div className = "abc"></div>
    <div className = "test">
        {/*Every paragraph(<p>) should have a picture next to it and pictures of the team under it!!*/}
        {/*
       */}
        <MainMenu />
        <div className="HiddenByMenu">
            <div className="Content">
                <div className = "Segment">
                    <div className = "SegmentText">
                        <h1>Who We Are</h1>
                        <p>We are a non-profit student organization, who are aiming to design and build Norway’s first operational student satellite. We are stationed at the Norwegian University of Science and Technology in Trondheim.</p>
                    </div>
                    <div>
                        <img src = {TeamPicture}/>
                    </div>
                </div>
                <div className = "Divider">
                    <hr/>
                </div>


                <div className = "Segment">
                <div className = "BigFknLogo">
                    <img src = {BigLogo}/>
                </div>
                    <div className = "SegmentText">
                        <h1>What we are doing</h1>
                        <p>We are designing and building small satellites that will be launched into space. We want to give our member a unique experience by working on complex space projects.</p>
                    </div>
                </div>

                <div className = "Divider">
                    <hr/>
                </div>

                <div className = "Segment">
                    <div className = "SegmentText">
                        <h1>Where we are going</h1>
                        <p>Once we have successfully launched our first operational satellite, we will start designing new and more complex satellites. Through our missions, we will help create the next generation of space engineers.</p>
                    </div>

                    <div>
                        <img src = {SatPic}/>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
</React.Fragment>
)


export default About;