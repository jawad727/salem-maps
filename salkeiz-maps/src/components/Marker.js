
import React, { Component } from "react";
import {Marker} from "react-map-gl"

class MarkerClass extends Component {
    state = {}
    render() {
        console.log(this.user)
        
      return (
        <>
  
          <div class="containerCenter">
            {this.props.locationss.map(item => (
            <Marker latitude={item.latitude} longitude={item.longitude} key={item.number}>
                <button className="markerButtons" onClick={() => (this.props.setMenuopen(this.props.ddd))}></button>
            </Marker> ))}

          </div>
        </>
      );
    }
  }

  export default MarkerClass