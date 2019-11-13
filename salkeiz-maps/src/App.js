import React, { useState } from 'react';
import './App.css';
import ReactMapGL, {Marker} from "react-map-gl"
import marianfoodshare from "./data/pictures/marian-foodshare.PNG"


const token = "pk.eyJ1IjoiamF3YWQ3MjciLCJhIjoiY2syd283cGY5MGhxZTNibzJsOGZvdzBsZCJ9.M4Ow-roauf6Sh7Yk-C44jA"
const locations = [44.9429, -123.0351]

function App() {
  const [viewport, setViewport] = useState({
    latitude: 44.9429,
    longitude: -123.0351,
    zoom: 13,
    width: "100vw",
    height: "100vh",
    
  })

  return (
    <div className="App">

    <div className="navbar">
      <p> MARION COUNTY NON PROFITS </p>
    </div>

    <div className="mainSidebar">
      <div className="cardObject">

        <div className="cardIMG" /> 
        
        <div className="cardContent">
          <p className="nameObject"> Boys & Girls Club of Salem, Marion and Polk Counties </p>
          <p className="addressObject"> 2405 Front St NE #120, Salem, OR 97301 </p>
          <p className="numberObject"><strong> Phone: </strong> (503) 364-9943 </p>
        </div>

      </div>

      <div className="cardObject">

        <div className="cardIMG" /> 

      </div>
    </div>
    
    <ReactMapGL {...viewport} mapboxApiAccessToken={token}
    
    onViewportChange={(viewport) => {
      setViewport(viewport)
    }}>
      <Marker latitude={locations[0]} longitude={locations[1]}>
      <button className="markerButtons"></button>
      </Marker>
    </ReactMapGL>
    </div>
  );
}

export default App;
