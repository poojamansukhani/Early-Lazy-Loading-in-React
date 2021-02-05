//How to change the state
//controller component & uncontrolled  component
import React, { Component } from "react";
import TextDisplay from "./TestDisplay";
export default class TextInput extends Component {
  state = { inputText: "Pooja" };
  handleChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  render() {
    return (
      <div>
        Company:
        <input type="text" id="txt" />
        <br />
        <input type="text" value="Evoke" />
        <div>
          Enter Your Name
          <input
            type="text"
            value={this.state.inputText}
            onChange={(event) => this.handleChange(event)}
          />
          {this.state.inputText ? (
            <TextDisplay text={this.state.inputText} />
          ) : (
            <TextDisplay text="Enter name please" />
          )}
        </div>
      </div>
    );
  }
}
