import React from 'react';

import './ChartControls.css'

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
      <div className={this.props.containerClass}>
        <input
          type="number"
          value={this.props.number}
          className={this.props.inputClass}
          readOnly
        />
        <button 
          className={this.props.buttonClass}
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
      plus: 0,
      minus: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePlus = this.updatePlus.bind(this);
    this.updateMinus = this.updateMinus.bind(this);
  }

  reset() {
    this.setState({plus: 0, minus: 0});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.plus, this.state.minus);
    this.reset();
  }

  // handleChange = (event) => {
  //   let name = event.target.name;
  //   let value = event.target.value;
  //   this.setState({[name]: value});
  // }

  updatePlus() {
    this.setState({plus: this.state.plus + 1});
  }

  updateMinus() {
    this.setState({minus: this.state.minus + 1});
  }

  render() {
    return (
      <div className="chart-controls">
        <div className="input-container">
          {/*<form onSubmit={this.handleSubmit}>
            <div className="plus-container">
              <input
                className="plusInput"
                type="number"
                name="plus"
                value={this.state.plus}
                onChange={this.handleChange}
              />
              <button className="plusButton">+</button>
            </div>
            <div className="minus-container">
              <input
                className="minusInput"
                type="number"
                name="minus"
                value={this.state.minus}
                onChange={this.handleChange}
              />
              <button className="minusButton">-</button>
            </div>
            <button type="submit" className="submitData">
              Submit
            </button>
          </form> */}
          <ControlledNumberInput
            containerClass="plus-container"
            inputClass="plusInput"
            buttonClass="plusButton"
            buttonText="+"
            number={this.state.plus}
            updateNumber={this.updatePlus}
          />
          <ControlledNumberInput
            containerClass="minus-container"
            inputClass="minusInput"
            buttonClass="minusButton"
            buttonText="-"
            number={this.state.minus}
            updateNumber={this.updateMinus}
          />
        </div>
        <SubmitButton onClick={this.handleSubmit}/>
        {/*<button className="addPostit">Add Postit</button>*/}
      </div>
    );
  }
}

export default ChartControls;