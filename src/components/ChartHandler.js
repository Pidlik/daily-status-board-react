import React from 'react'
import Cookies from 'js-cookie'

import './ChartHandler.css'

import BarChart from './Chart'
import ChartInput from './ChartInput'
import * as Constants from './constants'
import * as DatesHelper from './dates'
import TRACE_DEBUG from './trace'
import * as Random from './random'

function getRandomTestData(numItems) {
  let data = [];
  for(var i = 0; i < numItems; i++) {
    let date = new Date();
    date.setDate(new Date().getDate() - (numItems - i)); // Start numItems days ago and count up

    data.push({
      label: DatesHelper.getWeekdayName(date),
      nrPlus: Random.randomIntFromInterval(0, Constants.MAX_DATA_INPUT),
      nrMinus: Random.randomIntFromInterval(0, Constants.MAX_DATA_INPUT) * -1,
      date: DatesHelper.getIsoDate(date),
    });
  }
  return data;
}

class ChartHandler extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // dataArray = [{label, nrPlus, nrMinus, date}, ...]
      dataArray: []
    };

    this.updateChart = this.updateChart.bind(this);
  }

  updateChart(nrPlus, nrMinus) {
    let data = this.state.dataArray;
    let todaysDate = DatesHelper.getIsoDate();
    // TODO: Add yesterdays weekdayName? Cause we're reporting for yesterday?
    let newData = {label: DatesHelper.getWeekdayName(), nrPlus: nrPlus, nrMinus: nrMinus * -1, date: todaysDate};

    // Overwrite last data input if submitting new data on the same day
    if(data[data.length - 1].date === todaysDate) {
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
    let cookiesData = Cookies.getJSON(Constants.COOKIES_NAME);
    if(cookiesData !== undefined) {
      TRACE_DEBUG('Initiating chart with previously saved data');
      this.setState({ dataArray: cookiesData });
    }
    else {
      TRACE_DEBUG('Initiating chart with random test data');
      this.setState({ dataArray: getRandomTestData(8) });
    }    

    // window.setInterval(() => {
    //   this.setState({
    //     data: getData()
    //   })
    // }, 5000)
  }

  componentDidUpdate() {
    Cookies.set(Constants.COOKIES_NAME, this.state.dataArray);
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