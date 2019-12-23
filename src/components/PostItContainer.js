import React from 'react'
import ReactDOM from 'react-dom';

import './PostItContainer.css'

// function drop(event) {
//   var offset = event.dataTransfer.getData("Text").split(',');
//   var dm = document.getElementById(offset[2]);

//   if(dm != null && dm.className == "postit") {
//     dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
//     dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
//   }

//   event.preventDefault();
//   return false;
// }

// function drag_over(event) {
//   event.preventDefault();
//   return false;
// }

function PostIt(props) {
  // https://stackoverflow.com/questions/30730369/reactjs-component-not-rendering-textarea-with-state-variable
  const style = {
    top: props.top,
    left: props.left
  }

  // console.log('top: ' + props.top);
  // console.log('left: ' + props.left);

  return(
    <div className="postit" draggable="true" id={props.id} onDragStart={props.onDragStart}
      style={style}
    >
      <textarea defaultValue={props.text}/>
    </div>
  );
}

class PostItContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      draggedPostIt: {},
      eventClientX: 0,
      eventClientY: 0
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  onDragStart = (event, postIt) => {
    console.log('################### onDragStart');
    console.log('event.clientX: ' + event.clientX);
    console.log('postIt.pos.left: ' + postIt.pos.left);
    console.log('event.clientX - parseInt(postIt.pos.left, 10): ' + (event.clientX - parseInt(postIt.pos.left, 10)));
    this.setState({
      draggedPostIt: postIt,
      eventClientX: event.clientX - parseInt(postIt.pos.left, 10),
      eventClientY: event.clientY - parseInt(postIt.pos.top, 10),
    });
  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  onDrop = (event) => {
    console.log('################### onDrop');
    console.log("event.clientX - 837: " + (event.clientX - 837));
    console.log("event.clientY - 5.5: " + (event.clientY - 5.5));

    let stuff = ReactDOM.findDOMNode(this).getBoundingClientRect();
    // console.log(stuff);

    let draggedPostIt = this.state.draggedPostIt;
    draggedPostIt.pos.top = (event.clientY + 5.5) - this.state.eventClientY + 'px';
    draggedPostIt.pos.left = (event.clientX) - this.state.eventClientX + 'px';

    this.setState({
      // completedTasks: [...completedTasks, draggedTask],
      // todos: todos.filter(task => task.taskID !== draggedTask.taskID),
      // draggedPostIt: draggedPostIt,
    });
  }

  render() {
    return(
      <div className="post-it-container"
        onDrop={event => this.onDrop(event)}
        onDragOver={(event => this.onDragOver(event))}
      >
        {this.props.postIts.map(postIt => (
          <PostIt
            top={postIt.pos.top}
            left={postIt.pos.left}
            text={postIt.text}
            id={postIt.key}
            key={postIt.key}
            onDragStart={(event) => this.onDragStart(event, postIt)}
          />
        ))}
      </div>
    );
  }
}

export default PostItContainer;