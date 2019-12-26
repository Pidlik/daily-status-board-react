import React from 'react';
import Chart from 'chart.js';

var chartData = {
  labels: [],
  comments: [], // Not something from Chart JS
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

// TODO: Make text size responsive
// https://github.com/chartjs/chartjs-plugin-datalabels/issues/27
// https://chartjs-plugin-datalabels.netlify.com/guide/options.html#scriptable-options
let chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    bodyFontSize: 18,
    titleFontSize: 24,
      callbacks: {
        title: function(tooltipItem, data) {
          // return 'Comment of the day:';
          return '';
        },
        label: function(tooltipItem, data) {
          return '';
        },
        afterBody: function(tooltipItem, data) {
          let index = tooltipItem[0]['index'];
          let labelArray = [];
          labelArray.push(data.comments[index]);
          labelArray.push('Plus: ' + data.datasets[0].data[index]);
          labelArray.push('Minus: ' + data.datasets[1].data[index]*-1);
          return labelArray;
        },
      //   afterLabel: function(tooltipItem, data) {
      //     // var dataset = data['datasets'][0];
      //     // var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
      //     // return '(' + percent + '%)';
      //   }
      }
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
        suggestedMin: -5,
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
    });
  }

  componentDidUpdate() {
    this.myChart.data.labels = this.props.data.map(d => d.label);
    this.myChart.data.datasets[0].data = this.props.data.map(d => d.nrPlus);
    this.myChart.data.datasets[1].data = this.props.data.map(d => d.nrMinus);
    this.myChart.data.comments = this.props.data.map(d => d.comment);
    this.myChart.update();
  }

  render() {
    return (
      <div className="chart-container">
        <canvas ref={this.canvasRef} />
      </div>
    );
  }
} // BarChart

export default BarChart;