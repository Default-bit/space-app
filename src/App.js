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
import logo from "./logo.png";

import * as React from "react";
import { useRef, useEffect, useState } from "react";
import exportAsImage from "./utils/exportAsImage";
import useOnScreen from './hooks/useOnScreen';

const planets = [
  {
    id:0,
    image: sun,
    name: "There are 8 planets in Solar System",
    info: "Pluto is not a planet",
    distance: 0,
  },
  {
    id:1,
    image: mercury,
    name: "Mercury",
    info: "The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days.",
    distance: 364,
  },
  {
    id:2,
    image: venus,
    name: "Venus",
    info: "Spinning in the opposite direction to most planets, Venus is the hottest planet, and one of the brightest objects in the sky.",
    distance: 680,
  },
  {
    id:3,
    image: earth,
    name: "Earth",
    info: "The place we call home, Earth is the third rock from the sun and the only planet with known life on it - and lots of it too!",
    distance: 940,
  },
  {
    id:4,
    image: mars,
    name: "Mars",
    info: "The red planet is dusty, cold world with a thin atmosphere and is home to four NASA robots.",
    distance: 1430,
  },
  {
    id:5,
    image: jupiter,
    name: "Jupiter",
    info: "Jupiter is a massive planet, twice the size of all other planets combined, and has a centuries-old storm that is bigger than Earth.",
    distance: 4890,
  },
  {
    id:6,
    image: saturn,
    name: "Saturn",
    info: "The most recognizable planet with a system of icy rings, Saturn is a very unique and interesting planet.",
    distance: 9004,
  },
  {
    id:7,
    image: uranus,
    name: "Uranus",
    info: "Uranus has a very unique rotation--it spins on its side at an almost 90-degree angle, unlike other planets.",
    distance: 18080,
  },
  {
    id:8,
    image: neptune,
    name: "Neptune",
    info: "Neptune is now the most distant planet and is a cold and dark world nearly 3 billion miles from the Sun.",
    distance: 28290,
  },
];

const models = [
  {
    title: "Space Station",
    quantity: 8,
  }, 
  {
    title: "Rocket inventory",
    quantity: 10,
  },
  {
    title: "Space food",
    quantity: 7,
  },
  {
    title: "Galaxies",
    quantity: 12,
  },
];


function App() {
  const [distance, setDistance] = useState(planets[0].distance);
  const [currentPlanet,setCurrentPlanet] = useState(planets[0]);
  // const [currentDistance,setCurrentDistance] = useState(0);

  const ref = useRef()
  const isVisible = useOnScreen(ref)

  const  handleScroll = (event) => {
     console.log(event.target.scrollWidth);
     console.log(event.target.clientWidth);

     const winScroll = event.target.scrollLeft;

     const width =
     event.target.scrollWidth -
     event.target.clientWidth

     console.log(winScroll/width);

    // const nextPlanetDistance = planets[currentPlanet.id+1].distance/100
    
    // setCurrentPlanet((prevP)=>planets[prevP.id+1]);
    
    setDistance((prev) => prev + 1);
    
  }

  const [selected, setSelected] = useState(1);

  // const idx = selected;
  
  const handleClick = (event, idx) => {
    setSelected(idx);
  }




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
        {/* START */}
        <div className="flex-column2 pad-3">
        <div style={{ justifyContent: "flex-start", zIndex: 3,   display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src={logo} alt="app-logo"
                        style={{ width: "50px", marginRight: "80vw"}}>
          </img>
          <p className="text-gray2">
                <a>3DX</a>
          </p>
          </div>
        <div className="flex-row2" style={{fontSize: "15px", zIndex: 3}}>
            <p className="text-gray-600">
                <a href="https://www.nfactorial.school/">Login</a>
            </p>
            <p className="text-gray-600">
                <a href="https://www.nfactorial.school/">Register</a>
            </p>
        </div>
      </div>
      </header>

      <div className="parentArdak">
        
        <div className="ardak2">
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
          <div className="title">
            <h1>Solar System</h1>
          </div>
          <div className="depth-line">{distance} million km away</div>
          <div className="scrollMenu text">
            <div className="page-content" onScroll={handleScroll}>
              {planets.map((planet) => (
                <div key={planet.name} className="card" onClick={() => setDistance(planet.distance)}>
                  <div className="content">
                    <div>
                      <img
                        ref={ref}
                        id={planet.name}
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


        <div>
          <div className="example2">
            <div>
            <div className="title2"><p>Collection of thematic 3D models</p></div>
            <div className="cards-stack2">
            {models.map((model, idx) => (
                <a key={idx} className='carD2' style={{borderRadius: "18px", textDecoration: "none", color: "black"}} onClick={event => handleClick(event, idx)}>
                    <div className="card-cover"></div>
                    <div className="details">
                        <div className="details-title">{model.title}</div>
                        <div className="details-title">3D Models: {model.quantity}</div>
                        <button className="details-title btn">Buy</button>
                    </div>
                </a>
            ))}
        </div>
            
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
                <a href="https://www.nfactorial.school/">n! Incubator 2022</a>
            </p>
        </div>
    </footer>

      </div>
    </>
  );
}

export default App;
