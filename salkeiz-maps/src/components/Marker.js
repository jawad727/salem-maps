
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
        // {console.log(`aaa ${this.state.turnedoff}, ${this.props.item.number} -> ${this.props.authnumber}`)}
      
        {   
            var address = this.props.item.address
            var splitAddress = address.split(" ")
            var splitAddress2 = address.split(" ")
            var num = 1
            for (let i=0; i<splitAddress2.length - 1; i++) {
            splitAddress.splice(num, 0, '+');
            num = num + 2
            
          } }

          var mapsURL = splitAddress.join("")

          console.log(mapsURL)
      
        return (

            <Marker className="aaa" latitude={this.props.item.latitude} longitude={this.props.item.longitude} key={this.props.item.number}>
                <button className="markerButtons" onClick={() => (this.setState({turnedoff: !this.state.turnedoff}) )} style={this.state.turnedoff ? {backgroundColor: "darkred"} : null} ></button>
                <div className="describerContainer">
                    <div className="arrowUp" />
                    <div className="describer">
                        {this.props.item.name} <br />
                        <button className="describerButton btn1" >Website</button><a target="_blank" href={`https://www.google.com/maps/place/${mapsURL}`} className="describerButton btn2" >Take me there</a>
                    </div>
                    
                </div>
            </Marker> 
            
        
      );
    }
  }

  export default MarkerClass