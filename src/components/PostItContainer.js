import React from 'react'

import './PostItContainer.css'

function PostIt(props) {
  // https://stackoverflow.com/questions/30730369/reactjs-component-not-rendering-textarea-with-state-variable
  return(
    <div className="postit" draggable="true" onDragStart={props.onDragStart} id="">
      <textarea id="" defaultValue="test test test" />
    </div>
  );
}

class PostItContainer extends React.Component {

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
      <div className="post-it-container">
        <PostIt />
      </div>
    );
  }
}

export default PostItContainer;