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
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  onDragStart = (event, postIt) => {
    // event.preventDefault();
    console.log('onDragStart SDFSDOIFHSDOIFHSODIFHSODHFSDOIFSDHFSDOFHSDOIHFOISDHOFHSDOFHI');
    console.log(postIt);
    this.setState({
      draggedPostIt: postIt,
    });
    console.log(this.state.draggedPostIt);
  }

  onDragOver = (event) => {
    event.preventDefault();
    console.log('onDragOver');
  }

  onDrop = (event) => {
    console.log('onDrop');
    console.log("event.clientX: " + event.clientX);
    console.log("event.clientY: " + event.clientY);
    console.log(this.state.draggedPostIt);
    let stuff = ReactDOM.findDOMNode(this).getBoundingClientRect();
    console.log(stuff);
    let draggedPostIt = this.state.draggedPostIt;
    draggedPostIt.pos.top = (stuff.y > event.clientY ? stuff.y - event.clientY : event.clientY - stuff.y) + 'px';
    draggedPostIt.pos.left = event.clientX - stuff.x + 'px';
    // this.state.draggedPostIt.position.x = event.clientX;
    this.forceUpdate();
    // const { completedTasks, draggedTask, todos } = this.state;
    
    this.setState({
      // completedTasks: [...completedTasks, draggedTask],
      // todos: todos.filter(task => task.taskID !== draggedTask.taskID),
      draggedPostIt: draggedPostIt,
    });
    console.log(this.state.draggedPostIt);

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