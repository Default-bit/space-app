import "./App.css";
import mercury from "./mercury.png";
import venus from "./venus.png";
import earth from "./earth.png";
import mars from "./mars.png";
import jupiter from "./jupiter.png";
import saturn from "./saturn.png";
import uranus from "./uranus.png";
import neptune from "./neptune.png";
import frozen from "./frozen.png";
import sun from "./sun.png";
import Paint from "./Paint";
import Planet from "./Planet";
import Example from "./Example";
import PlanetExample from "./PlanetExample";

import * as React from "react";
import { useRef, useEffect, useState } from "react";
import exportAsImage from "./utils/exportAsImage";

const planets = [
  {
    image: sun,
    name: "There are 8 planets in Solar System",
    info: "The Pluto is not a planet",
    distance: "567",
  },
  {
    image: mercury,
    name: "Mercury",
    info: "this is mercury",
    distance: "567",
  },
  {
    image: venus,
    name: "Venus",
    info: "this is venus",
    distance: "567",
  },
  {
    image: earth,
    name: "Earth",
    info: "this is earth",
    distance: "567",
  },
  {
    image: mars,
    name: "Mars",
    info: "this is mars",
    distance: "567",
  },
  {
    image: jupiter,
    name: "Jupiter",
    info: "this is jupiter",
    distance: "567",
  },
  {
    image: saturn,
    name: "Saturn",
    info: "this is saturn",
    distance: "567",
  },
  {
    image: uranus,
    name: "Uranus",
    info: "this is uranus",
    distance: "567",
  },
  {
    image: neptune,
    name: "Neptune",
    info: "this is neptune",
    distance: "567",
  },
];


function App() {
  const exportRef = useRef();
  let [distance, setDistance] = useState(0);

  let handleScroll = (event) => {
    console.log(event.target.scrollLeft);
    setDistance(event.target.scrollLeft);
  }

  const [selected, setSelected] = useState(0);
  
  const handleClick = (event, idx) => {
    setSelected(idx);
    console.log(idx);
  }

  return (
    <>
      <header>
        <title>Twinkling Night Sky</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
      </header>

      <div>
        
        <div className="ardak2">
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
          <div className="title">
            <h1>Solar System</h1>
          </div>
          <div className="depth-line">{distance} km away</div>
          <div className="scrollMenu text">
            <div className="page-content" onScroll={handleScroll}>
              {planets.map((planet) => (
                <div key={planet.name} className="card">
                  <div className="content">
                    <div>
                      <img
                        src={planet.image}
                        alt="planet-information"
                        style={{ width: "500px" }}
                      />
                    </div>
                    <h2 className="title">{planet.name}</h2>
                    <p className="copy">
                      {planet.info}
                      {planet.info}
                      {planet.info}
                      {planet.info}
                      {planet.info}
                    </p>
                    <button className="btn">View Trips</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="section">
            {/* <div className="title">
              <h1>Have you seen the pattern?</h1>
            </div> */}
            <div className="parentTemp">
              <h1 className="temp">
                <span>factors</span>
                <div className="message">
                  <div className="word1">temperature</div>
                  <div className="word2">atmosphere</div>
                  <div className="word3">composition</div>
                </div>
              </h1>
            </div>
            <div className="row">
              <div>
                <img
                  src={frozen}
                  alt="planet"
                  style={{ width: "500px", margin: "100px" }}
                />
              </div>
              <div className="column">
                {/* Column Content */}
              </div>
            </div>
          </div>

          <div className="example">
            <div>
            <div className="cards-stack">
            {planets.slice(1).map((planet, idx) => (
                <a key={idx} className='carD' style={{borderRadius: "18px", textDecoration: "none", color: "black"}} onClick={event => handleClick(event, idx)}>
                    <div className="card-cover"></div>
                    <div className="details">
                        <div className="details-title">{planet.name}</div>
                    </div>
                </a>
                
            ))}
        </div>
            
            </div>
            <div className="planetCanvas">
            <PlanetExample id={selected} />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
