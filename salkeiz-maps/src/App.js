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
    <div>
      <div> 

      </div>
    </div>
    <ReactMapGL {...viewport} mapboxApiAccessToken={token}
    // mapStyle="mapbox://styles/jawad727/ck2wp8iui0eva1cmr5shukly8"
    onViewportChange={(viewport) => {
      setViewport(viewport)
    }}>
      <Marker latitude={locations[0]} longitude={locations[1]}>
      <button>BUTTON</button>
      </Marker>
    </ReactMapGL>
    </div>
  );
}

export default App;
