import React from 'react'

import './PostItHandler.css'

import PostItContainer from './PostItContainer'
import PostItControls from './PostItControls'

import * as DatesHelper from './dates'
import TRACE_DEBUG from './trace'
import * as Random from './random'

function getRandomTestData(numItems) {
  let data = [];
  for(var i = 0; i < numItems; i++) {
    data.push({
      pos: {
        top: `Random.randomIntFromInterval(0, 200)px`,
        left: `Random.randomIntFromInterval(0, 200)px`
      },
      text: DatesHelper.getWeekdayName(),
      key: `post-it-note-${i}`,
    });
  }
  return data;
}

class PostItHandler extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {
    console.log(getRandomTestData(8));
    return(
      <React.Fragment>
        <PostItContainer postIts={getRandomTestData(8)} />
        <PostItControls />
      </React.Fragment>
    );
  }
}

export default PostItHandler;