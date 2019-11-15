
import React, { Component } from "react";
import {Marker} from "react-map-gl"

class MarkerClass extends Component {
    state = {
        turnedoff: true
    }
    
    componentWillReceiveProps() {
        console.log("componentStart")
       if (this.props.authnumber == this.props.item.number) {this.setState({turnedoff: false})}
       console.log("componentEnd")
    }

    render() { 
        {console.log(`aaa ${this.state.turnedoff}, ${this.props.item.number} -> ${this.props.authnumber}`)}
      return (

            <Marker latitude={this.props.item.latitude} longitude={this.props.item.longitude} key={this.props.item.number}>
                <button className="markerButtons" onClick={() => (this.setState({turnedoff: !this.state.turnedoff}) )} style={this.state.turnedoff ? {backgroundColor: "darkred"} : null} ></button>
                
            </Marker> 
        
      );
    }
  }

  export default MarkerClass