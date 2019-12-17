import React from 'react';

class ChartHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <div id="chart-container">
          {this.props.children}
        </div>
        
        <div id="chart-controls">
          <div id="input-container">
            <div id="plus-container">
              <input type="number" id="plusInput" value="0"/>
              <button id="plusButton">+</button>
            </div>
          <div id="minus-container">
            <input type="number" id="minusInput" value="0"/>
            <button id="minusButton">-</button>
          </div>
        </div>
          <button id="submitData">Submit</button>
          <button id="addPostit">Add Postit</button>
        </div>
      </React.Fragment>
    );
  }
}

export default ChartHandler;