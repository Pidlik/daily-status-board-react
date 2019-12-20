import React from 'react';

import './PostItControls.css'

function AddPostItButton(props) {
  return(
    <button className="add-post-it">Add Post It</button>
  );
}

function Trashcan(props) {
  // https://stackoverflow.com/questions/30730369/reactjs-component-not-rendering-textarea-with-state-variable
  return(
    <div id="trashcan-container" dragable="false"
      ondragenter="drag_enter(event)"
      ondragleave="drag_leave(event)"
      ondrop="drop_trashcan(event)"
      ondragover="drag_over(event)">
        <img className="trashcan-image" alt="trashcan" />
    </div>
  );
}

class PostItControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="post-it-controls">
        <AddPostItButton />
        <Trashcan />
      </div>
    );
  }
}

export default PostItControls;