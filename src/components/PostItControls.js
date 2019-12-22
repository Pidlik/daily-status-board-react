import React from 'react';

import './PostItControls.css'

import img from '../assets/images/trashcan.png'

function AddPostItButton(props) {
  return(
    <button onClick={props.onClick} className="add-post-it">Add Post It</button>
  );
}

function Trashcan(props) {
  // onDragEnter="drag_enter(event)"
  // onDragLeave="drag_leave(event)"
  // onDrop="drop_trashcan(event)"
  // onDragOver="drag_over(event)">
  return(
    <div className="trashcan-container" dragable="false">
        <img className="trashcan-image" src={img} alt="trashcan" />
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
        <AddPostItButton onClick={this.props.addPostIt} />
        <Trashcan />
      </div>
    );
  }
}

export default PostItControls;