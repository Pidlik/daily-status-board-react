import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ChartHandler from './components/chart_handler/chart_handler';
// import PostItHandler from './components/post_it_handler/post_it_handler';

ReactDOM.render(<ChartHandler />, document.getElementById('left-container'));
// ReactDOM.render(<PostItHandler />, document.getElementById('right-container'));