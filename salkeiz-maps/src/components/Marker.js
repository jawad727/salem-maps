
import React, { Component } from "react";
import {Marker} from "react-map-gl"
import {TweenMax} from "gsap"





class MarkerClass extends Component {
    state = {
        turnedoff: true
    }
    
    componentWillReceiveProps(newProps) {
        console.log("componentStart")
       if (newProps.authnumber == this.props.item.number) {this.setState({turnedoff: false})}
    //    if (newProps.authnumber == this.props.item.number) {() => {this.props.setColorChanger({ locationColor: "lightgreen" })}}
       console.log()
       console.log(this.state.turnedoff)
    }

    // {this.state.turnedoff == true ?   : () => {this.props.setColorChanger({ locationColor: "darkred" })} }
      
    //  www() {
    //     this.props.setColorChanger({ locationColor: "lightgreen" })
    // }
      

    render() { 

        // {() => {this.props.setColorChanger({ locationColor: "lightgreen" })}}
    //   console.log(this.props.setColorChanger)
    // {() => (this.www())}
        
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

      
        return (

            <Marker className="aaa" latitude={this.props.item.latitude} longitude={this.props.item.longitude} key={this.props.item.number}>

                

                <button className="markerButtons" onClick={() => (this.setState({turnedoff: !this.state.turnedoff}) )} style={this.state.turnedoff ? {backgroundColor: "darkred"} : null} ></button>
                <div className="describerContainer" style={!this.state.turnedoff ? {display: "block"} : null }>
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