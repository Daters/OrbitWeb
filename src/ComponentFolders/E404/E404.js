import React from "react"
import Header from "../Header/Header"
import MainMenu from "../Header/MainMenu"


const E404 = () => (
<div>
    <MainMenu/>

    <div className = "HiddenByMenu">
        <div className = "innhold">
            Her ble det en 404!
            </div>
     </div>
    </div>
);

export default E404;