import React from 'react';

import '../chart/chart.css'

import InputHandler from '../input_handler/input_handler'

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
          <InputHandler/>
        </div>
      </React.Fragment>
    );
  }
}

export default ChartHandler;