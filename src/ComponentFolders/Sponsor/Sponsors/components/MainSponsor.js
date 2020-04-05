import React from 'react'
import Slide from 'react-reveal/Slide'


function MainSponsor(props) {
    return (
        <div id="main-sponsors">
            <section>
                <img src={props.image}></img>
            </section>
            <Slide right>
            <article>
                <h1>{props.sponsorName}</h1>
                <p>{props.sponsorInfo}</p>
            </article>
            </Slide>
        </div>
    )
}

export default MainSponsor
