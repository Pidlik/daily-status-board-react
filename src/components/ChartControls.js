import React from 'react';

import './ChartControls.css'

class ControlledNumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  render() {
    return (
      <div className={this.props.containerClass}>
        <input
          type="number"
          value={this.state.number}
          className={this.props.inputClass}
          readOnly
        />
        <button 
          className={this.props.buttonClass}
          onClick={e => this.setState({ number: this.state.number + 1 })}
        >
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

function SubmitButton(props) {
  return(
    <button className="submitData">Submit</button>
  );
}

class ChartControls extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  render() {
    return (
      <div className="chart-controls">
        <div className="input-container">
          <ControlledNumberInput
            containerClass="plus-container"
            inputClass="plusInput"
            buttonClass="plusButton"
            buttonText="+"
          />
          <ControlledNumberInput
            containerClass="minus-container"
            inputClass="minusInput"
            buttonClass="minusButton"
            buttonText="-"
          />
        </div>
        <SubmitButton />
        {/*<button className="addPostit">Add Postit</button>*/}
      </div>
    );
  }
}

export default ChartControls;