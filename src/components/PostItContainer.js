import React from 'react'

import './PostItContainer.css'

function PostIt(props) {
  let style = null;
  if(props.pos !== undefined) {
    style = {
      top: props.pos.top,
      left: props.pos.left
    }
  }

  return(
    <div
      className="postit"
      draggable="true"
      id={props.id}
      style={style}
      onDragStart={props.onDragStart}
    >
      <textarea
        value={props.text}
        onChange={props.onChange}
      />
    </div>
  );
}

class PostItContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      draggedPostIt: {},
      dragStartOffsetX: 0,
      dragStartOffsetY: 0,
    };
  }

  onDragStart = (event, index, postIt) => {
    // Set index of post it here for the trashcan in PostItControls.js to be able to get it and delete
    // the correct post it. TODO: Lift up state
    event.dataTransfer.setData('postItIndex', index);

    // TODO: Explain better dude
    // Calculate how many pixels from the mouseclick (click and drag) to the side of the post it note.
    // The event.clientX/Y is the coordinates where the drag started (regards to the viewport). Taking those coordinates
    // minus the post its relative position will enable us to drop the post it without it jumping to where the mouse
    // pointer is (the top left corner)
    let postItStyle = window.getComputedStyle(event.target, null);
    let dragStartOffsetX = event.clientX - parseInt(postItStyle.getPropertyValue('left'));
    let dragStartOffsetY = event.clientY - parseInt(postItStyle.getPropertyValue('top'));

    this.setState({
      draggedPostIt: postIt,
      index: index,
      dragStartOffsetX: dragStartOffsetX,
      dragStartOffsetY: dragStartOffsetY,
    });
  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  onDrop = (event) => {
    let draggedPostItCopy = Object.assign({}, this.state.draggedPostIt);

    // Calculate the post its new position form the drop coordinates and the dragStart offset. This will place the
    // post it exaclty where you drop it, as oppossed its top left corner jumping to the coordinates of the cursor.
    let pos = {
      left: event.clientX - this.state.dragStartOffsetX + 'px',
      top: event.clientY - this.state.dragStartOffsetY + 'px'
    };

    draggedPostItCopy.pos = pos;

    this.props.handlePostItChange(event, this.state.index, draggedPostItCopy);
  }

  render() {
    return(
      <div className="post-it-container"
        onDrop={event => this.onDrop(event)}
        onDragOver={(event => this.onDragOver(event))}
      >
        {this.props.postIts.map((postIt, index) => (
          <PostIt
            pos={postIt.pos}
            id={postIt.key}
            key={postIt.key}
            text={postIt.text}
            onDragStart={(event) => this.onDragStart(event, index, postIt)}
            onChange={(event) => this.props.handlePostItChange(event, index) }
          />
        ))}
      </div>
    );
  }
}

export default PostItContainer;