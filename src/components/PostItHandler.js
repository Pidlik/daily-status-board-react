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
        top: `${Random.randomIntFromInterval(0, 200)}px`,
        left: `${Random.randomIntFromInterval(0, 200)}px`
      },
      text: DatesHelper.getWeekdayName(),
      key: `post-it-note-${i+Random.randomIntFromInterval(0, 1000)}`,
    });
  }
  return data;
}

class PostItHandler extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      postIts: [],
    };

    this.addPostIt = this.addPostIt.bind(this);
    this.handlePostItChange = this.handlePostItChange.bind(this);
  }

  addPostIt() {
    TRACE_DEBUG('Add post it');
    this.setState({
      postIts: [...this.state.postIts, getRandomTestData(1)[0]],
    });
  }

  handlePostItChange(event, index) {
    let postItsCopy = Object.assign([], this.state.postIts);
    postItsCopy[index].text = event.target.value;

    this.setState({
      postIts: postItsCopy
    });
  }

  componentDidMount() {
    this.setState({
      postIts: getRandomTestData(5),
    });
  }

  componentDidUpdate() {

  }

  render() {
    return(
      <React.Fragment>
        <PostItContainer postIts={this.state.postIts} handlePostItChange={this.handlePostItChange} />
        <PostItControls addPostIt={this.addPostIt} />
      </React.Fragment>
    );
  }
}

export default PostItHandler;