import React from 'react';

import './PostItControls.css'

import trashcanImage from '../assets/images/trashcan.png'
import explosionGif from '../assets/images/trashcan_explosion.gif'

import * as Constants from './constants'

function AddPostItButton(props) {
  return(
    <button onClick={props.onClick} className="add-post-it">Add</button>
  );
}

function RemoveAllPostItsButton(props) {
  if(props.show) {
    return(
      <button onClick={props.onClick} className="add-post-it">Remove All</button>
    );
  }
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
      {props.showExplosion && <img className="explosion-gif" src={explosionGif} alt="explosion" /> }
      <img className="trashcan-image" src={trashcanImage} alt="trashcan" />
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
    this.showExplosion = this.showExplosion.bind(this);
    this.hideExplosion = this.hideExplosion.bind(this);
  }

  handleDragEnter(event) {
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

  showExplosion() {
    this.setState({
      showExplosion: true
    });
  }

  hideExplosion() {
    this.setState({
      showExplosion: false
    });
  }

  handleDrop(event) {
    this.handleDragLeave();
    this.showExplosion();

    // Theres a bug were the gif doesn't get "reset" and starts some frames in every second or third time
    // https://stackoverflow.com/questions/10730212/proper-way-to-reset-a-gif-animation-with-displaynone-on-chrome
    // The gif is 0.7 sec long, remove it after completion (minus 10 cause' you can see that it starts over)
    setTimeout(this.hideExplosion, 690);
    this.props.removePostIt(event);
  }

  handleKeyDown(event) {
    switch(event.keyCode) {
      case Constants.POST_IT_KEY_ADD:
        this.props.addPostIt();
        break
      default:
        break
    }
  }

  componentDidMount() {
    // TODO: React's onKeyPress etc. doesn't work... and when it does work (with autofocus), it always unfocuses...
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  render() {
    return (
      <div className="post-it-controls">
        <AddPostItButton onClick={this.props.addPostIt} />
        <Trashcan
          onDrop={this.handleDrop}
          isHoveringTrashcan={this.state.isHoveringTrashcan}
          showExplosion={this.state.showExplosion}
          onDragEnter={this.handleDragEnter}
          onDragOver={this.handleDragOver}
          onDragLeave={this.handleDragLeave}
        />
        <RemoveAllPostItsButton onClick={this.props.removeAllPostIts} show={Constants.ENABLE_DEBUG} />
      </div>
    );
  }
}

export default PostItControls;