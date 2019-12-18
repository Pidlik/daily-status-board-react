import React from 'react';

import './InputHandler.css'

class ControlledNumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="number"
          value={this.state.number}
          id={this.props.inputId}
          readOnly
        />
        <button 
          onClick={e => this.setState({ number: this.state.number + 1 })}
          id={this.props.buttonId}>
            {this.props.buttonText}
          </button>
      </React.Fragment>
    );
  }
}

class InputHandler extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  render() {
    return (
      <React.Fragment>
        <div id="input-container">
          <div id="plus-container">
            <ControlledNumberInput
              inputId="plusInput"
              buttonId="plusButton"
              buttonText="+"
            />
          </div>
          <div id="minus-container">
            <ControlledNumberInput
              inputId="minusInput"
              buttonId="minusButton"
              buttonText="-"
            />
          </div>
        </div>
        <button id="submitData">Submit</button>
        <button id="addPostit">Add Postit</button>
      </React.Fragment>
    );
  }
}

export default InputHandler;