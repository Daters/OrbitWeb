import SponsorHeader from "./components/SponsorHeader";
import "./Sponsors.css";
import DownArrow from "../resources/down-arrow.png";
import React, { Component } from "react";
import MainSponsor from "./components/MainSponsor";
import PlatinumSponsorRow from "./components/PlatinumSponsorRow";

import nortbitsponsor from "../resources/norbitSponsor.png";
import eidelLogo from "../resources/EIDELLOGO.png";
import kongsbergLogo from "../resources/KongsbergLOGO.png";
import KSATLOGO from "../resources/KSATLOGO.png";
import NALOGO from "../resources/NALOGO.png";
import NTNULOGO from "../resources/NTNULOGO.png";
import SimproLOGO from "../resources/SimproLOGO.png";
import DataResponsLogo from "../resources/DataResponsLogo.png";

import NavBar from "../NavBar/NavBar/NavBar"

class Sponsors extends Component {
  const;

  render() {
    return (
      <div>
        <NavBar />
        <div id="sponsor-body">
          <header className="topHeader">
            <div className="container">
              <SponsorHeader
                header="SPONSORS"
                info="Each year, Revolve NTNU gets bigger and better. 
                            One of the reasons we grow each year is because of our 
                            sponsors. Let’s not forget that they are a part of our team, 
                            as well as the students who build the car.  Without our sponsors, 
                            we would not have had the opportunity to produce high-quality parts 
                            for the different systems on our car. We have several different types 
                            of sponsors, ranging from everything from software to mechanical parts 
                            to autonomous systems. We are so grateful for all of the help we get 
                            from them. They are always there if we need help exploring new concepts 
                            or improve our designs. We can always count on them to help us if we 
                            are in need. To all of our sponsors, thank you for being a part of 
                            Revolve NTNU Team 2020!"
              />
            </div>
            <img className="scroll-down-block" src={DownArrow}></img>
          </header>
          <main id="sponsors-main">
            <section>
              <div className="main-sponsors-header">
                <h1>Main Sponsors</h1>
                <hr />
              </div>
              <MainSponsor
                image={nortbitsponsor}
                sponsorName="Norbit"
                sponsorInfo="Kongsberg Gruppen (KONGSBERG) is an international technology corporation that delivers advanced and reliable solutions that improve safety, security and performance in complex operations and during extreme conditions. KONGSBERG works with demanding customers in the global defence, maritime, oil and gas and aerospace industries.KONGSBERG has been Revolve’s main sponsor since 2014. As a part of our cooperation with KONGSBERG, Revolve NTNU is granted access to one of Norway’s most high-tech workshops, giving us the opportunity to produce our own monocoque and other carbon fiber parts."
              />
            </section>
            <section className="platinum-sponsors">
              <div className="container">
                <div className="platinum-sponsors-header">
                  <h1>Platinum sponsors</h1>
                  <hr></hr>
                </div>
                <section className="platinum-logos">
                  <PlatinumSponsorRow
                    image1={eidelLogo}
                    image2={kongsbergLogo}
                  />
                  <PlatinumSponsorRow image1={KSATLOGO} image2={NALOGO} />
                  <PlatinumSponsorRow image1={NTNULOGO} image2={SimproLOGO} />
                  <PlatinumSponsorRow image1={DataResponsLogo} image2={null} />
                </section>
              </div>
            </section>
            <hr style={{ width: "90%", margin: "auto" }}></hr>
            <div className="become-sponsor-container">
              <p>
                Orbit is run with both technical and non-technical support from
                our sponsors. We are very grateful for the support we receive,
                and are always looking for new companies to work with. Want to
                be a part of our journey? Send an email to{" "}
                <span className="email-text">marketing@orbitntnu.com</span>!
              </p>
            </div>
          </main>
          <footer></footer>
        </div>
      </div>
    );
  }
}

export default Sponsors;
