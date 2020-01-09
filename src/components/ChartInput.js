import React from 'react';

import './ChartHandler.css'
import TRACE_DEBUG from './trace'
import * as Constants from './constants'

function ControlledNumberInput(props) {
  return (
    <div className="plus-minus-container">
      <input className="plus-minus-input"
        type="number"
        value={props.number}
        readOnly
      />
      <button
        className={`plus-minus-button ${props.buttonClass}`}
        onClick={(event) => props.updateNumber(1, event)} // "Hack" to rearange input
      >
        {props.buttonText}
      </button>
    </div>
  );
}

function SubmitButton(props) {
  return(
    <button className="submitData" onClick={props.onClick}>Submit</button>
  );
}

class ChartInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nrPlus: 0,
      nrMinus: 0,
    };

    this.hasValidInput = this.hasValidInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePlus = this.updatePlus.bind(this);
    this.updateMinus = this.updateMinus.bind(this);
  }

  reset() {
    this.setState({nrPlus: 0, nrMinus: 0});
  }

  hasValidInput() {
   if(this.state.nrPlus === 0 && this.state.nrMinus === 0) {
      TRACE_DEBUG('No valid input data (nrPlus: 0, nrMinus: 0)');
      return false;
    } else if(this.state.nrPlus < 0 || this.state.nrMinus < 0) {
      TRACE_DEBUG('No valid input data (nrPlus < 0 or nrMinus < 0)');
      return false;
    }

    return true;
  }


  handleSubmit() {
    if(this.hasValidInput()) {
      this.props.onSubmit(this.state.nrPlus, this.state.nrMinus);
    }
    this.reset();
  }

  // TODO: Duplicated code
  updatePlus(nr = 1) {
    if(this.state.nrPlus + nr > Constants.MAX_DATA_INPUT || this.state.nrPlus + nr < 0) {
      TRACE_DEBUG('Number input cannot exceed ' + Constants.MAX_DATA_INPUT + ' and not below 0');
      return;
    }

    this.setState({
      nrPlus: this.state.nrPlus + nr
    });
  }

  updateMinus(nr = 1) {
    if(this.state.nrMinus + nr > Constants.MAX_DATA_INPUT || this.state.nrMinus + nr < 0) {
      TRACE_DEBUG('Number input cannot exceed ' + Constants.MAX_DATA_INPUT + ' and not below 0');
      return;
    }

    this.setState({
      nrMinus: this.state.nrMinus + nr
    });
  }

  handleKeyDown(event) {
	// Do not allow editing if in the wrong view
    if(document.activeElement.tagName.toLowerCase() === "textarea"){
      return;
    }
    switch(event.keyCode) {
      case Constants.CHART_KEY_PLUS:
        if(event.shiftKey)
          this.updatePlus(-1);
        else
          this.updatePlus(1);
        break
      case Constants.CHART_KEY_MINUS:
        if(event.shiftKey)
          this.updateMinus(-1);
        else
          this.updateMinus(1);
        break
      case Constants.CHART_KEY_SUBMIT:
        this.handleSubmit();
        break
      default:
        break
    }
  }

  componentDidMount() {
    // TODO: React's onKeyPress etc. doesn't work... and when it does work (with autofocus), it always unfocuses...
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
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

export default ChartInput;