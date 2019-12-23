import React from 'react'

import './PostItContainer.css'

function PostIt(props) {
  const style = {
    top: props.top,
    left: props.left
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

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  onDragStart = (event, postIt) => {
    // TODO: Explain better dude
    // Calculate how many pixels from the mouseclick (click and drag) to the side of the post it note.
    // The event.clientX/Y is the coordinates where the drag started (regards to the viewport). Taking those coordinates
    // minus the post its relative position will enable us to drop the post it without it jumping to where the mouse
    // pointer is (the top left corner)
    let dragStartOffsetX = event.clientX - parseInt(postIt.pos.left, 10);
    let dragStartOffsetY = event.clientY - parseInt(postIt.pos.top, 10);

    this.setState({
      draggedPostIt: postIt,
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
    draggedPostItCopy.pos.left = event.clientX - this.state.dragStartOffsetX + 'px';
    draggedPostItCopy.pos.top = event.clientY - this.state.dragStartOffsetY + 'px';

    this.setState({
      draggedPostIt: draggedPostItCopy,
      dragStartOffsetX: 0,
      dragStartOffsetY: 0,
    });
  }

  render() {
    return(
      <div className="post-it-container"
        onDrop={event => this.onDrop(event)}
        onDragOver={(event => this.onDragOver(event))}
      >
        {this.props.postIts.map((postIt, index) => (
          <PostIt
            left={postIt.pos.left}
            top={postIt.pos.top}
            id={postIt.key}
            key={postIt.key}
            text={postIt.text}
            onDragStart={(event) => this.onDragStart(event, postIt)}
            onChange={(event) => this.props.handlePostItChange(event, index) }
          />
        ))}
      </div>
    );
  }
}

export default PostItContainer;