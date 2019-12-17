import React from 'react';
import Chart from 'chart.js';

import './chart.css'
import './chart_controls.css'

/*

Chart JS:
https://www.chartjs.org/
https://www.chartjs.org/samples/latest/charts/bar/stacked.html

Chart JS & React:
https://www.createwithdata.com/react-chartjs-dashboard/

React refs:
https://reactjs.org/docs/forwarding-refs.html
https://blog.logrocket.com/how-to-use-react-createref-ea014ad09dba/

*/

// TODO: Needed? Just input the rgb string directly in the chartData?
window.chartColors = {
  red: 'rgb(220, 20, 60)',
  redOp: 'rgb(220, 20, 60, 0.6)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(34, 175, 34)',
  greenOp: 'rgb(34, 175, 34, 0.6)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(231,233,237)'
};

var chartData = {
  labels: [],
  datasets: [{
    label: 'Plus',
    backgroundColor: window.chartColors.greenOp,
    borderColor: window.chartColors.green,
    borderWidth: 1,
    data: []
  }, {
    label: 'Minus',
    backgroundColor: window.chartColors.redOp,
    borderColor: window.chartColors.red,
    borderWidth: 1,
    data: []
  }]
}; // chartData

let chartOptions = {
  responsive: true,
  // maintainAspectRatio: false,
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

// function Chart() {
//   return (
//     <div id="left-container">
//       <div id="chart-container">
//         <BarChart
//           data={chartData}
//           title="My amazing data"
//           color="#70CAD1"
//         />
//       </div>
//       <div id="chart-controls">
//         <div id="input-container">
//           <div id="plus-container">
//             <input type="number" id="plusInput" value="0"/>
//             <button id="plusButton">+</button>
//           </div>
//         <div id="minus-container">
//           <input type="number" id="minusInput" value="0"/>
//           <button id="minusButton">-</button>
//         </div>
//       </div>
//         <button id="submitData">Submit</button>
//         <button id="addPostit">Add Postit</button>
//       </div>
//     </div>
//   );
// }

export default BarChart;