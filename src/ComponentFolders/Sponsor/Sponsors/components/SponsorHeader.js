import React from 'react'
import "../Sponsors.css"

function SponsorHeader(props) {
    return (
        <div id="sponsors-header">
            <h1>{props.header}</h1>
            <p>{props.info}</p>
        </div>
    )
}

export default SponsorHeader
