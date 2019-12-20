import React from 'react'

import './PostItHandler.css'

import PostItContainer from './PostItContainer'
import PostItControls from './PostItControls'

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
    return(
      <React.Fragment>
        <PostItContainer />
        <PostItControls />
      </React.Fragment>
    );
  }
}

export default PostItHandler;