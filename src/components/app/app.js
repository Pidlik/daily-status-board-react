import React from 'react';
import './app.css';

import ChartHandler from '../chart_handler/chart_handler'
import BarChart from '../chart/chart';

// Data generation
function getRandomArray(numItems) {
  // Create random array of objects
  let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let data = [];
  for(var i = 0; i < numItems; i++) {
    data.push({
      label: names[i],
      value: Math.round(20 + 80 * Math.random())
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

  data.push({
    title: 'Visits',
    data: getRandomDateArray(150)
  });

  data.push({
    title: 'Categories',
    data: getRandomArray(20)
  });

  data.push({
    title: 'Categories',
    data: getRandomArray(10)
  });

  data.push({
    title: 'Data 4',
    data: getRandomArray(6)
  });

  return data;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getData()
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        data: getData()
      })
    }, 5000)
  }

  render() {
    return (
      <React.Fragment>
        <div id="left-container">
          <ChartHandler>
            <BarChart
              data={this.state.data[1].data}
              title={this.state.data[1].title}
              color="#70CAD1"
            />
          </ChartHandler>
        </div>

        <div id="right-container">
          <div id="postit-container" ondrop="drop(event)" ondragover="drag_over(event)"></div>
          <div dragable="false" id="trashcan-container" ondragenter="drag_enter(event)" ondragleave="drag_leave(event)" ondrop="drop_trashcan(event)" ondragover="drag_over(event)"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
