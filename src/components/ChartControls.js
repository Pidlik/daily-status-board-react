import React from 'react';

import './ChartControls.css'
import DEBUG_LOG from './trace.js'

class ControlledNumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber() {
    this.props.updateNumber();
  }

  render() {
    return (
      <div className="plus-minus-container">
        <input className="plus-minus-input"
          type="number"
          value={this.props.number}
          readOnly
        />
        <button 
          className={"plus-minus-button" + " " + this.props.buttonClass}
          onClick={this.updateNumber}
        >
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

function SubmitButton(props) {
  return(
    <button className="submitData" onClick={props.onClick}>Submit</button>
  );
}

class ChartControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nrPlus: 0,
      nrMinus: 0,
    };

    this.isValidInput = this.isValidInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePlus = this.updatePlus.bind(this);
    this.updateMinus = this.updateMinus.bind(this);
  }

  reset() {
    this.setState({nrPlus: 0, nrMinus: 0});
  }

  isValidInput(nrPlus, nrMinus) {
    if(!nrPlus || !nrMinus) { // Javascript "truthy"
      DEBUG_LOG('No valid input data, returning');
      return false;
    } else if(nrPlus == 0 && nrMinus == 0) {
      DEBUG_LOG('No valid input data (nrPlus: 0, nrMinus: 0), returning');
      return false;
    } else if(nrPlus < 0 || nrMinus < 0) {
      DEBUG_LOG('No valid input data (nrPlus < 0 or nrMinus < 0), returning');
      return false;
    }

    return true;
  }


  handleSubmit() {
    if(this.isValidInput(this.state.nrPlus, this.state.nrMinus)) {
      this.props.onSubmit(this.state.nrPlus, this.state.nrMinus);
    }
    this.reset();
  }

  // handleChange = (event) => {
  //   let name = event.target.name;
  //   let value = event.target.value;
  //   this.setState({[name]: value});
  // }

  updatePlus() {
    this.setState({nrPlus: this.state.nrPlus + 1});
  }

  updateMinus() {
    this.setState({nrMinus: this.state.nrMinus + 1});
  }

  render() {
    return (
      <div className="chart-controls">
        <div className="input-container">
          <ControlledNumberInput
            buttonClass="plusButton"
            buttonText="+"
            number={this.state.nrPlus}
            updateNumber={this.updatePlus}
          />
          <ControlledNumberInput
            buttonClass="minusButton"
            buttonText="-"
            number={this.state.nrMinus}
            updateNumber={this.updateMinus}
          />
        </div>
        <SubmitButton onClick={this.handleSubmit}/>
      </div>
    );
  }
}

export default ChartControls;