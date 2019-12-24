import React from 'react';

import './PostItControls.css'

import img from '../assets/images/trashcan.png'

function AddPostItButton(props) {
  return(
    <button onClick={props.onClick} className="add-post-it">Add Post It</button>
  );
}

function Trashcan(props) {
  return(
    <div
      className={`trashcan-container ${props.isHoveringTrashcan ? 'trashcan-container-drag-enter' : ''}`}
      dragable="false"
      onDragEnter={props.onDragEnter}
      onDragLeave={props.onDragLeave}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
    >
        <img className="trashcan-image" src={img} alt="trashcan" />
    </div>
  );
}

class PostItControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoveringTrashcan: false
    };

    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDragEnter(event) {
    console.log('handleDragEnter');
    this.setState({
      isHoveringTrashcan: true
    });
  }

  handleDragOver(event) {
    // Needed to transfer data from onDragStart (PostItCcotainer.js)
    event.preventDefault();
  }

  handleDragLeave() {
    this.setState({
      isHoveringTrashcan: false
    });
  }

  handleDrop(event) {
    this.handleDragLeave();
    this.props.removePostIt(event);
  }

  render() {
    return (
      <div className="post-it-controls">
        <AddPostItButton onClick={this.props.addPostIt} />
        <Trashcan
          onDrop={this.handleDrop}
          isHoveringTrashcan={this.state.isHoveringTrashcan}
          onDragEnter={this.handleDragEnter}
          onDragOver={this.handleDragOver}
          onDragLeave={this.handleDragLeave}
        />
      </div>
    );
  }
}

export default PostItControls;