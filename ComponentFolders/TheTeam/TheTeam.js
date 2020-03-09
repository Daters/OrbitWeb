import React from "react"
import "./TheTeam.css"
import Jorgen from "./Jorgen.jpg"
import MainMenu from "../Header/MainMenu"

//import Footer from "../Footer/Footer"

//import Lazy from "react-lazyload"  //--- Use lazyloading for members pictures! (maybe)

/*
//Heading is always showing, content is show/hide onClick
*/


const TheTeam = () => (<React.Fragment>
    <div className = "Outer">
        {/*Every paragraph(<p>) should have a picture next to it and pictures of the team under it!!*/}
        {/*
       */}
        <MainMenu/>
        <div className="HiddenByMenu">
            <div className="Content">
                <div className="TeamDescription">
                    <h1>
                        These are the teams in Orbit and their members
                </h1>
                </div>
                <br />
                <br /><br />

                <div className="Board">
                    <div className="LeaderHead">
                        <div className="TeamLeader">
                            <img src={Jorgen} alt="Member" />
                            <h4 align="center">Jørgen Katralen, Web-Developer</h4>
                        </div>

                        <div className="GroupHead">
                            <h1>The Board</h1>
                            <br />
                            <button onClick={ShowHideBoard} className="Button">View</button>
                        </div>
                    </div>
                    <br />

                    <div className="BoardContent">
                        <div className="GroupText">
                            <p>The board is responsible for managing the organization. The board works closely with Project Management and Marketing to ensure that projects are feasible and budgets are kept. In addition, the board is responsible for the development of the organization, HSE, ensuring that roles & responsibilities are fulfilled and all other aspects included in the management of an engineering student organization. The board makes sure that any project the organization undertakes is in line with Orbit’s Mission, Vision and Values document.
                    </p>
                        </div>

                        <div className="Members">
                            <div className="TeamMember">
                                <img src={Jorgen} alt="Member" />
                                <h4>Test1, dehdue
                                    Web-developer
                        </h4>
                            </div>

                            <div className="TeamMember">
                                <img src={Jorgen} alt="Member" />
                                <h4>Test2, jieojfe
                                    Web-Developer
                        </h4>
                            </div>

                            <div className="TeamMember">
                                <img src={Jorgen} alt="Member" />
                                <h4>Test3, dgydgeyd</h4>
                            </div>

                            <div className="TeamMember">
                                <img src={Jorgen} alt="Member" />
                                <h4>Test3, geygdyeg</h4>
                            </div>

                        </div>
                    </div>
                </div>

                {/*Using className inside the <hr/> tag bugs out, need a div wrapped around it */}
                <div className="hr">
                    <hr />
                </div>

                <div className="Marketing">
                    <div className="LeaderHead">
                        <div className="TeamLeader">
                            <img src={Jorgen} alt="Member" />
                            <h4 align="center">Jørgen Katralen, Web-Developer</h4>
                        </div>

                        <div className="GroupHead">

                            <h1>Marketing</h1>
                            <br />
                            <button onClick={ShowHideMarketing} className="Button">View</button>
                        </div>
                    </div>
                    <br />

                    <div className="MarketingContent">
                        <div className="GroupText">
                            <p>The marketing group is responsible for sponsorship agreements and public relations as well as our web site and social media profiles. The group plans and carries out all recruitment, stands and presentations.
                        </p>
                        </div>
                    </div>

                    <div className="hr">
                        <hr />
                    </div>

                    <div className="ProjectSelfie">
                        <div className="LeaderHead">
                            <div className="TeamLeader">
                                <img src={Jorgen} alt="Member" />
                                <h4 align="center">Jørgen Katralen, Web-Developer</h4>
                            </div>

                            <div className="GroupHead">
                                <h1>Project Selfiesat</h1>
                                <br />
                                <button onClick={ShowHideSelfieContent} className="Button">View</button>
                            </div>
                        </div>
                        <br />

                        <div className="SelfieContent">
                            <p>Project Management is responsible for requirement understanding, planning, execution, controlling, monitoring, reviewing and delivering Project SelfieSat in time with the help of the whole team.
                </p>
                        </div>
                    </div>

                    <div className="hr">
                        <hr />
                    </div>

                    <div className="SystemsEngineering">
                        <div className="LeaderHead">
                            <div className="TeamLeader">
                                <img src={Jorgen} alt="Member" />
                                <h4 align="center">Jørgen Katralen, Web-Developer</h4>
                            </div>

                            <div className="GroupHead">
                                <h1>Systems Engineering</h1>
                                <br />
                                <button onClick={ShowHideSystemsContent} className="Button">View</button>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="SystemsContent">
                        <p>We implement a workable design and are responsible for the progress of the mission
                </p>
                    </div>

                    <div className="hr">
                        <hr />
                    </div>

                    <div className="OBC">
                        <div className="LeaderHead">
                            <div className="TeamLeader">
                                <img src={Jorgen} alt="Member" />
                                <h4 align="center">Jørgen Katralen, Web-Developer</h4>
                            </div>

                            <div className="GroupHead">
                                <h1>OBC</h1>
                                <br />
                                <button onClick={ShowHideOBCContent} className="Button">View</button>
                            </div>
                            <br />
                        </div>
                    </div>
                    <br />

                    <div className="OBCContent">
                        <p>OBC is short for On-Board Computer. The OBC team is responsible for programming our satellite’s main computer and giving assistance in programming to the ADCS team. The main computer handles commands from the ground, monitor the system and change its operating modes. It is the satellites functional center and a key part to make the satellite operational.
                    </p>
                    </div>

                    <div className="hr">
                        <hr />
                    </div>


                    <div className="ADCS">
                        <div className="LeaderHead">
                            <div className="TeamLeader">
                                <img src={Jorgen} alt="Member" />
                                <h4 align="center">Jørgen Katralen, Web-Developer</h4>
                            </div>

                            <div className="GroupHead">
                                <h1>ADCS</h1>
                                <br />
                                <button onClick={ShowHideADCSContent} className="Button">View</button>
                            </div>
                            <br />
                        </div>
                    </div>
                    <br />

                    <div className="ADCSContent">
                        <p>The Attitude determination and control system (ADCS) is responsible for developing a system that can control the attitude of the satellite. The attitude needs to be controlled so the Earth is in the background for the selfies, so the antennas point to Earth for radio transmission and so that the solar cells are pointing towards the Sun for charging.
            </p>
                    </div>

                    <div className="hr">
                        <hr />
                    </div>

                    <div className="Electronics">
                        <div className="LeaderHead">
                            <div className="TeamLeader">
                                <img src={Jorgen} alt="Member" />
                                <h4 align="center">Jørgen Katralen, Web-Developer</h4>
                            </div>

                            <div className="GroupHead">
                                <h1>Electronics</h1>
                                <br />
                                <button onClick={ShowHideElectronicsContent} className="Button">View</button>
                            </div>
                            <br />
                        </div>
                    </div>
                    <br />


                    <div className="ElectronicsContent">
                        <p>The electronics team (ES – Electronic systems) are responsible for the development and production of the electrical systems on the satellite. Other teams are responsible for their systems, but can hire the electronics team for development of hardware. The team makes sure that all the systems of the satellite interfaces correctly according to the EICD (Electrical Interface Control Document). The EPS (Electronic Power System) is currently ES responsibility.
            </p>
                    </div>

                    <div className="hr">
                        <hr />
                    </div>



                    <div className="Mechanical">
                        <div className="LeaderHead">
                            <div className="TeamLeader">
                                <img src={Jorgen} alt="Member" />
                                <h4 align="center">Jørgen Katralen, Web-Developer</h4>
                            </div>

                            <div className="GroupHead">
                                <h1>Mechanical</h1>
                                <br />
                                <button onClick={ShowHideMechanicalContent} className="Button">View</button>
                            </div>
                            <br />
                        </div>
                    </div>
                    <br />

                    <div className="MechanicalContent">
                        <p>The mechanical team is responsible for creating the physical requirements of the other subsystems. Aswell we are designing and manufacturing a camera boom in house. The simulation and testing will also be planned by this team.
            </p>
                    </div>

                    <div className="hr">
                        <hr />
                    </div>

                    <div className="Payload">
                        <div className="LeaderHead">
                            <div className="TeamLeader">
                                <img src={Jorgen} alt="Member" />
                                <h4 align="center">Jørgen Katralen, Web-Developer</h4>
                            </div>

                            <div className="GroupHead">
                                <h1>Payload</h1>
                                <br />
                                <button onClick={ShowHidePayloadContent} className="Button">View</button>
                            </div>
                            <br />
                        </div>
                    </div>
                    <br />

                    <div className="PayloadContent">
                        <p>The payload team are responsible for making the camera system and ensuring that it is integrated with the mechanical- and other electrical systems. This includes software development for taking the pictures as well as facilitating communications with the OBC.
            </p>
                    </div>

                    <div className="hr">
                        <hr />
                    </div>

                    <div className="SatCom">
                        <div className="LeaderHead">
                            <div className="TeamLeader">
                                <img src={Jorgen} alt="Member" />
                                <h4 align="center">Jørgen Katralen, Web-Developer</h4>
                            </div>

                            <div className="GroupHead">
                                <h1>Sat Com</h1>
                                <br />
                                <button onClick={ShowHideSatComContent} className="Button">View</button>
                            </div>
                            <br />
                        </div>
                    </div>
                    <br />

                    <div className="SatComContent">
                        <p>The Satellite Radio team is responsible for implementing the space segment of the communication system. The team works closely with the Ground Station team and the OBC team to implement routing of commands from the ground station to the satellite, and telemetry and data from the satellite to the ground station. The satellite radios are essential to ensure mission success, and a lot of effort is being put into making sure we have a reliable communication link with high bandwidth.
            </p>
                    </div>

                    <div className="hr">
                        <hr />
                    </div>

                    <div className="SubOrbital">
                        <div className="LeaderHead">
                            <div className="TeamLeader">
                                <img src={Jorgen} alt="Member" />
                                <h4 align="center">Jørgen Katralen, Web-Developer</h4>
                            </div>

                            <div className="GroupHead">
                                <h1>Sub- Orbital</h1>
                                <br />
                                <button onClick={ShowHideSubOrbitalContent} className="Button">View</button>
                            </div>
                            <br />
                        </div>
                    </div>
                    <br />

                    <div className="SubOrbitalContent">
                        <p>----</p>
                    </div>

                    <div className="hr">
                        <hr />
                    </div>


                    <div className="ProjectNextSat">
                        <div className="LeaderHead">
                            <div className="TeamLeader">
                                <img src={Jorgen} alt="Member" />
                                <h4 align="center">Jørgen Katralen, Web-Developer</h4>
                            </div>

                            <div className="GroupHead">
                                <h1>Project NextSat</h1>
                                <br />
                                <button onClick={ShowHideNextSatContent} className="Button">View</button>
                            </div>
                            <br />
                        </div>
                    </div>
                    <br />
                    <h1>Project NextSat</h1>
                    <h2>Project management</h2>
                    <br />
                    <div className="NextSatContent">
                        <p>Project Management is responsible for requirement understanding, planning, execution, controlling, monitoring, reviewing and delivering Project NextSat in time with the help of the whole team.
            </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</React.Fragment>
)
/*
These are the button-functions that change display between "none" and "block".
We need one function for each button.

If we try to input the element by className via another function it passes as "undefined".
Look at other ways to do this!
*/


function ShowHideBoard() {
    var x = document.getElementsByClassName("BoardContent")
    if (x[0].style.display === "block") {
        x[0].style.display = "none"
    }
    else {
        x[0].style.display = "block"
    }
}

function ShowHideMarketing() {
    var x = document.getElementsByClassName("MarketingContent")
    if (x[0].style.display === "block") {
        x[0].style.display = "none"
    }
    else {
        x[0].style.display = "block"
    }
}

function ShowHideSelfieContent() {
    var x = document.getElementsByClassName("SelfieContent")
    if (x[0].style.display === "block") {
        x[0].style.display = "none"
    }
    else {
        x[0].style.display = "block"
    }
}


function ShowHideSystemsContent() {
    var x = document.getElementsByClassName("SystemsContent")
    if (x[0].style.display === "block") {
        x[0].style.display = "none"
    }
    else {
        x[0].style.display = "block"
    }
}

function ShowHideOBCContent() {
    var x = document.getElementsByClassName("OBCContent")
    if (x[0].style.display === "block") {
        x[0].style.display = "none"
    }
    else {
        x[0].style.display = "block"
    }
}

function ShowHideADCSContent() {
    var x = document.getElementsByClassName("ADCSContent")
    if (x[0].style.display === "block") {
        x[0].style.display = "none"
    }
    else {
        x[0].style.display = "block"
    }
}

function ShowHideElectronicsContent() {
    var x = document.getElementsByClassName("ElectronicsContent")
    if (x[0].style.display === "block") {
        x[0].style.display = "none"
    }
    else {
        x[0].style.display = "block"
    }
}


function ShowHideMechanicalContent() {
    var x = document.getElementsByClassName("MechanicalContent")
    if (x[0].style.display === "block") {
        x[0].style.display = "none"
    }
    else {
        x[0].style.display = "block"
    }
}

function ShowHidePayloadContent() {
    var x = document.getElementsByClassName("PayloadContent")
    if (x[0].style.display === "block") {
        x[0].style.display = "none"
    }
    else {
        x[0].style.display = "block"
    }
}


function ShowHideSatComContent() {
    var x = document.getElementsByClassName("SatComContent")
    if (x[0].style.display === "block") {
        x[0].style.display = "none"
    }
    else {
        x[0].style.display = "block"
    }
}

function ShowHideSubOrbitalContent() {
    var x = document.getElementsByClassName("SubOrbitalContent")
    if (x[0].style.display === "block") {
        x[0].style.display = "none"
    }
    else {
        x[0].style.display = "block"
    }
}

function ShowHideNextSatContent() {
    var x = document.getElementsByClassName("NextSatContent")
    if (x[0].style.display === "block") {
        x[0].style.display = "none"
    }
    else {
        x[0].style.display = "block"
    }
}


export default TheTeam;