import React from 'react';
import Chart from 'chart.js';

/*

Deploy to GitHub Pages:
https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

Chart JS:
https://www.chartjs.org/
https://www.chartjs.org/samples/latest/charts/bar/stacked.html

Chart JS & React:
https://www.createwithdata.com/react-chartjs-dashboard/

React refs:
https://reactjs.org/docs/forwarding-refs.html
https://blog.logrocket.com/how-to-use-react-createref-ea014ad09dba/

*/

/*
For ChartController maybe?
https://reactpatterns.com/

handleEvent({type}) {
  switch(type) {
    case "click":
    case "mouseenter":
      return this.setState({ hovered: true })
    case "mouseleave":
      return this.setState({ hovered: false })
    default:
      return console.warn(`No case for event type "${type}"`)
  }
}

class ControlledNameInput extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  render() {
    return (
      <input
        value={this.state.name}
        onChange={e => this.setState({ name: e.target.value })}
      />
    );
  }
}

*/

var chartData = {
  labels: [],
  datasets: [{
    label: 'Plus',
    backgroundColor: 'rgb(34, 175, 34, 0.6)', // Green, opacity
    borderColor: 'rgb(34, 175, 34)', // Green
    borderWidth: 1,
    data: []
  }, {
    label: 'Minus',
    backgroundColor: 'rgb(220, 20, 60, 0.6)', // Red, opacity
    borderColor: 'rgb(220, 20, 60)', // Red
    borderWidth: 1,
    data: []
  }]
}; // chartData

let chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    bodyFontSize: 36,
    titleFontSize: 18,
        // callbacks: {
        //   title: function(tooltipItem, data) {
        //     // console.log("You're hovering on index: " + tooltipItem[0]['index']);
        //     return "Comment:";// + data['labels'][tooltipItem[0]['index']];
        //   },
        //   label: function(tooltipItem, data) {
        //     // return data['datasets'][0]['data'][tooltipItem['index']];
        //     let index = tooltipItem['index'];
        //     return DAILY_COMMENTS[index];
        //   },
        //   afterLabel: function(tooltipItem, data) {
        //     // var dataset = data['datasets'][0];
        //     // var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
        //     // return '(' + percent + '%)';
        //   }
        // }
  },
  scales: {
    xAxes: [{
      stacked: true,
      ticks: {
        fontSize: 15,
      }
    }],
    yAxes: [{
      stacked: true,
      ticks: {
        fontSize: 25,
        suggestedMin: 0,
        suggestedMax: 8,
      }
    }]
    }
  }; // chartOptions

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'bar',
      options: chartOptions,
      data: chartData,
      // {
      //   labels: this.props.data.map(d => d.label),
      //   datasets: [{
      //     label: this.props.title,
      //     data: this.props.data.map(d => d.value),
      //     backgroundColor: this.props.color
      //   }]
      // }
    });
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map(d => d.label);
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
    this.myChart.update();
  }

  render() {
    return (
      <canvas ref={this.canvasRef} />
    );
  }
} // BarChart

export default BarChart;