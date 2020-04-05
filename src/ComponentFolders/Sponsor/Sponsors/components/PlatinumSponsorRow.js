import React from "react";
import Slide from "react-reveal/Slide";

function PlatinumSponsorRow(props) {
  return (
    <div className="platinum-sponsor-row">
      <Slide left>
        <img src={props.image1}></img>
      </Slide>
      <div style={{ flex: 1 }} />
      <Slide right>
        <img src={props.image2}></img>
      </Slide>
    </div>
  );
}

export default PlatinumSponsorRow;
