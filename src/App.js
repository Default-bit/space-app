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
    info: "Pluto is not a planet",
    distance: "567",
  },
  {
    image: mercury,
    name: "Mercury",
    info: "The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days.",
    distance: "567",
  },
  {
    image: venus,
    name: "Venus",
    info: "Spinning in the opposite direction to most planets, Venus is the hottest planet, and one of the brightest objects in the sky.",
    distance: "567",
  },
  {
    image: earth,
    name: "Earth",
    info: "The place we call home, Earth is the third rock from the sun and the only planet with known life on it - and lots of it too!",
    distance: "567",
  },
  {
    image: mars,
    name: "Mars",
    info: "The red planet is dusty, cold world with a thin atmosphere and is home to four NASA robots.",
    distance: "567",
  },
  {
    image: jupiter,
    name: "Jupiter",
    info: "Jupiter is a massive planet, twice the size of all other planets combined, and has a centuries-old storm that is bigger than Earth.",
    distance: "567",
  },
  {
    image: saturn,
    name: "Saturn",
    info: "The most recognizable planet with a system of icy rings, Saturn is a very unique and interesting planet.",
    distance: "567",
  },
  {
    image: uranus,
    name: "Uranus",
    info: "Uranus has a very unique rotation--it spins on its side at an almost 90-degree angle, unlike other planets.",
    distance: "567",
  },
  {
    image: neptune,
    name: "Neptune",
    info: "Neptune is now the most distant planet and is a cold and dark world nearly 3 billion miles from the Sun.",
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

  const [selected, setSelected] = useState(1);

  // const idx = selected;
  
  const handleClick = (event, idx) => {
    setSelected(idx);
    console.log(idx);
  }

  // useEffect(() => {
  //   setSelected(idx);
  // }, [idx]);

  const numberIso=8;

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

      <div className="parentArdak">
        
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
                    </p>
                    {/* <button className="btn">View Trips</button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          {/* <div className="section">
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
                <div>Earth</div>
                <div>👇🏻</div>
                <div>The Solar System</div>
                <div>👇🏻</div>
                <div>Orion Arm</div>
                <div>👇🏻</div>
                <div>The Milky Way</div>
                <div>👇🏻</div>
                <div>Local Group</div>
                <div>👇🏻</div>
                <div>Virgo Cluster</div>
                <div>👇🏻</div>
                <div>Virgo Super-Cluster</div>
                <div>👇🏻</div>
                <div>Universe</div>
              </div>
            </div>
          </div> */}

          <div className="parentTemp">
              <h1 className="temp">
                <span>paint</span>
                <div className="message">
                  <div className="word1">your</div>
                  <div className="word2">own</div>
                  <div className="word3">planet</div>
                </div>
              </h1>
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
                <a key={numberIso} className='carD' style={{borderRadius: "18px", textDecoration: "none", color: "black"}} onClick={event => handleClick(event, numberIso)}>
                    <div className="card-cover"></div>
                    <div className="details">
                        <div className="details-title">planet-X</div>
                    </div>
                </a>
        </div>
            
            </div>
            <div className="planetCanvas">
            <PlanetExample id={selected} />
            </div>
          </div>
        </div>

        <footer className="flex-column pad-3">
        <div className="footer-text">
            <p style={{color: "rgb(156,163,175)", marginBottom: "0"}}>“Not explaining science seems to me perverse. When you're in love, you want to tell the world.” Carl Sagan</p>
        </div>
        <div className="flex-row" style={{fontSize: "15px"}}>
            {/* <p className="text-gray-600">
                <a href="https://github.com/Default-bit/space-app">Github</a>
            </p>
            <p className="text-gray-600">
                <a href="https://www.linkedin.com">LinkedIn</a>
            </p> */}
            <p className="text-gray-600">
                <a href="https://www.instagram.com/nfactorial.school/">n! Incubator</a>
            </p>
        </div>
    </footer>

      </div>
    </>
  );
}

export default App;
