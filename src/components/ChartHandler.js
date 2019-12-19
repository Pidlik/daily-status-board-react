import React from 'react';

import './ChartHandler.css';

import BarChart from './Chart';
import ChartControls from './ChartControls'

// Data generation
function getRandomArray(numItems) {
  // Create random array of objects
  let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let data = [];
  for(var i = 0; i < numItems; i++) {
    data.push({
      label: names[i],
      plus: Math.round(20 + 80 * Math.random()),
      minus: Math.round(20 + 80 * Math.random()) * -1
    });
  }
  return data;
}

function getRandomDateArray(numItems) {
  // Create random array of objects (with date)
  let data = [];
  let baseTime = new Date('2018-05-01T00:00:00').getTime();
  let dayMs = 24 * 60 * 60 * 1000;
  for(var i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * dayMs),
      value: Math.round(20 + 80 * Math.random())
    });
  }
  return data;
}

function getData() {
  let data = [];

  // data.push({
  //   title: 'Visits',
  //   data: getRandomDateArray(150)
  // });

  data.push({
    title: 'Categories',
    data: getRandomArray(20)
  });

  // data.push({
  //   title: 'Categories',
  //   data: getRandomArray(10)
  // });

  // data.push({
  //   title: 'Data 4',
  //   data: getRandomArray(6)
  // });

  return data;
}

class ChartHandler extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // data=[{label, plus, minus}, ...]
      dataArray: getRandomArray(10)//getData()
    };

    this.updateChart = this.updateChart.bind(this);
  }

  updateChart(plus, minus) {
    let newData = {label: "df", plus: plus, minus: minus * -1};

    if(this.state.dataArray.length >= 10) {
      console.log('Dataset data is longer than MAX_DATA_LENGTH (' + 10 + '), removing first datapoint');
      // Remove the label first
      // this.myChart.shift();
    }

    this.setState({
      dataArray: [...this.state.dataArray, newData]
    });
  }

  componentDidMount() {
    this.setState({ data: getData() });
    
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
        <ChartControls onSubmit={this.updateChart} />
      </React.Fragment>
    );
  }
}

export default ChartHandler;