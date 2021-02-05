import React, { Component } from "react";
export default class TextDisplay extends Component {
  render() {
    let myStyle = {
      fontSize: 20,
      color: "#ff0000",
      background: "yellow"
    };
    return <div style={myStyle}>Welcome:{this.props.text}</div>;
  }
}
