import React from 'react';
import './chart.css'
import './chart_controls.css'

function Chart() {
  return (
    <div id="left-container">
      <div id="chart-container">
        <canvas id="canvas"></canvas>
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
    </div>
  );
}

export default Chart;