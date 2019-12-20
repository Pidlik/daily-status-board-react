import React from 'react';

import './ChartHandler.css';

import BarChart from './Chart';
import ChartInput from './ChartInput'
import * as Constants from './constants'
import TRACE_DEBUG from './trace'

function getRandomTestData(numItems) {
  let data = [];
  for(var i = 0; i < numItems; i++) {
    let date = new Date();
    date.setDate(new Date().getDate() - (numItems - i)); // Start numItems days ago and count up

    data.push({
      label: date.toISOString().slice(0,10), // YYYY-MM-DD
      plus: Math.round(20 + 80 * Math.random()),
      minus: Math.round(20 + 80 * Math.random()) * -1
    });
  }
  return data;
}

class ChartHandler extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // data=[{label, plus, minus}, ...]
      dataArray: []
    };

    this.updateChart = this.updateChart.bind(this);
  }

  updateChart(plus, minus) {
    let data = this.state.dataArray;
    let todaysDate = new Date().toISOString().slice(0,10); // YYYY-MM-DD
    let newData = {label: todaysDate, plus: plus, minus: minus * -1};

    // Overwrite last data input if submitting new data on the same day
    if(todaysDate === data[data.length - 1].label) {
      TRACE_DEBUG('Overwriting last datapoint');

      data[data.length - 1] = newData;
      this.setState({
        dataArray: data
      });

      return;
    }

    // Remove first value in array
    if (data.length >= Constants.MAX_DATA_LENGTH) {
      TRACE_DEBUG('At max data length (' + Constants.MAX_DATA_LENGTH + '), removing first datapoint');

      data.shift();
      this.setState({
        dataArray: [...data, newData]
      });

      return;
    }

    this.setState({
      dataArray: [...data, newData]
    });
  }

  componentDidMount() {
    this.setState({ dataArray: getRandomTestData(8) });

    // window.setInterval(() => {
    //   this.setState({
    //     data: getData()
    //   })
    // }, 5000)
  }

  render() {
    return(
      <React.Fragment>
        <BarChart data={this.state.dataArray} />
        <ChartInput onSubmit={this.updateChart} />
      </React.Fragment>
    );
  }
}

export default ChartHandler;