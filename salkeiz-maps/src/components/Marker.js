
import React, { Component } from "react";
import {Marker} from "react-map-gl"
import {TweenMax} from "gsap"

class MarkerClass extends Component {
    state = {
        turnedoff: true
    }
    
    componentWillReceiveProps() {
        console.log("componentStart")
       if (this.props.authnumber == this.props.item.number) {this.setState({turnedoff: false})}
       console.log("componentEnd")
    }

    editMenuAnimationOpen = () => { 
        TweenMax.to(".markerButtons", 1, { transform: "translateX(0px)" })
        // console.log("Worked")
      }

    

    render() { 
        {console.log(`aaa ${this.state.turnedoff}, ${this.props.item.number} -> ${this.props.authnumber}`)}
      return (

            <Marker className="aaa" latitude={this.props.item.latitude} longitude={this.props.item.longitude} key={this.props.item.number}>
                <button className="markerButtons" onClick={() => (this.setState({turnedoff: !this.state.turnedoff}) )} style={this.state.turnedoff ? {backgroundColor: "darkred"} : null} ></button>
                <div className="describerContainer">
                    <div className="arrowUp" />
                    <div className="describer">
                        {this.props.item.name}
                    </div>
                    
                </div>
            </Marker> 
            
        
      );
    }
  }

  export default MarkerClass