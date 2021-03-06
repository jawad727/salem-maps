import React, { useState } from 'react';
import './App.css';
import ReactMapGL from "react-map-gl"
import marianfoodshare from "./data/pictures/marian-foodshare.PNG"
import { locationss } from "./data/nonprofits.js"
import {TweenMax} from "gsap"
import MarkerClass from "./components/Marker"

const token = "pk.eyJ1IjoiamF3YWQ3MjciLCJhIjoiY2syd283cGY5MGhxZTNibzJsOGZvdzBsZCJ9.M4Ow-roauf6Sh7Yk-C44jA"

function App() {

  const [viewport, setViewport] = useState({
    latitude: 44.9429,
    longitude: -123.0351,
    zoom: 12,
    width: "100%",
    height: "100vh",
  })

  const [menuopen, setMenuopen] = useState({
    menuisopen: true 
  })

  const [numberAuth, setNumberAuth] = useState({
    authnumber: 454,
  })

  const [colorChanger, setColorChanger] = useState({
    locationColor: "darkred"
  })

  const editMenuAnimationClose = () => { 
    TweenMax.to(".mainSidebar", 1, { left: "-430px" })
    TweenMax.to(".menuarrow", 1, { left: "-430px" })
    // console.log("Failed")
  }

  const editMenuAnimationOpen = () => { 
    TweenMax.to(".mainSidebar", 1, { left: "0px" })
    TweenMax.to(".menuarrow", 1, { left: "0px" })
    // console.log("Worked")
  }

  return (
    

    <div className="App">

    <div className="navbar">
      <i class="fas fa-bars fa-2x menuBurger" onClick={() => (setMenuopen({menuisopen: !menuopen.menuisopen}))}></i>
      <p> MARION COUNTY NON-PROFITS </p>
    </div>
    
    
    {menuopen.menuisopen ? editMenuAnimationOpen() : editMenuAnimationClose()}


    <div className="mainSidebar">
      {locationss.map(item => (
              <div className="cardObject" key={item.number} onClick={() => {setNumberAuth({authnumber: item.number } );  } } style={{borderBottom: `5px solid ${colorChanger.locationColor}`}}>
              <div className="cardIMG" style={{ backgroundImage: `url(${item.imgURL})` }} /> 
              <div className="cardContent">
                <p className="nameObject"> {item.name} </p>
                <p className="addressObject"> {item.address} </p>
                <p className="numberObject"><strong> Phone: </strong> {item.number} </p>
              </div>
            </div>
      ))}
    <div className="sidebarbottom"/>
    </div>
    
    <div className="menuarrow"  onClick={() => (setMenuopen({menuisopen: !menuopen.menuisopen}))}>
    <i className="fas fa-angle-right fa-4x"></i>
    </div>

    <ReactMapGL {...viewport} mapboxApiAccessToken={token}
    mapStyle="mapbox://styles/jawad727/ck2x3v5sq290g1crumh9munqn"
    onViewportChange={(viewport) => {
      setViewport(viewport)
    }}>

    {locationss.map(item => (
            
            <MarkerClass setColorChanger={setColorChanger} authnumber={numberAuth.authnumber} numberid={item.number} item={item} />

            ))}

    </ReactMapGL>
    </div>
  );
}

export default App;
