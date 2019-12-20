import React from 'react'

import './PostItContainer.css'

function PostIt(props) {
  // https://stackoverflow.com/questions/30730369/reactjs-component-not-rendering-textarea-with-state-variable
  return(
    // const style = {
    //   top: {props.top}, 
    //   left: {props.left},
    // }

    <div className="postit" draggable="true" onDragStart={props.onDragStart} id={props.id}
      // style={style}
    >
      <textarea defaultValue={props.text}/>
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
        {this.props.postIts.map(postIt => (
          <PostIt
            top={postIt.pos.top}
            left={postIt.pos.left}
            text={postIt.text}
            id={postIt.key}
            key={postIt.key}
          />
        ))}
      </div>
    );
  }
}

export default PostItContainer;