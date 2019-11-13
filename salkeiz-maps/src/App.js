import React, { useState } from 'react';
import './App.css';
import ReactMapGL, {Marker} from "react-map-gl"
import marianfoodshare from "./data/pictures/marian-foodshare.PNG"
import { locationss } from "./data/nonprofits.js"

const token = "pk.eyJ1IjoiamF3YWQ3MjciLCJhIjoiY2syd283cGY5MGhxZTNibzJsOGZvdzBsZCJ9.M4Ow-roauf6Sh7Yk-C44jA"
const locations = [44.9429, -123.0351]
console.log(locationss)

function App() {
  const [viewport, setViewport] = useState({
    latitude: 44.9429,
    longitude: -123.0351,
    zoom: 12,
    width: "100%",
    height: "100vh",
    
  })

  return (

    <div className="App">

    <div className="navbar">
      <p> MARION COUNTY NON-PROFITS </p>
    </div>

    <div className="mainSidebar">
      {locationss.map(item => (
              <div className="cardObject">
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
    
    <ReactMapGL {...viewport} mapboxApiAccessToken={token}
    mapStyle="mapbox://styles/jawad727/ck2x3v5sq290g1crumh9munqn"
    onViewportChange={(viewport) => {
      setViewport(viewport)
    }}>
      {locationss.map(item => (
      <Marker latitude={item.latitude} longitude={item.longitude}>
      <button className="markerButtons"></button>
      </Marker> ))}

    </ReactMapGL>
    </div>
  );
}

export default App;
