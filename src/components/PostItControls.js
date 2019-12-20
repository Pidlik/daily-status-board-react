import React from 'react';

import './PostItControls.css'

function AddPostItButton(props) {
  return(
    <button className="add-post-it">Add Post It</button>
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
        {/*Trashcan image */}
      </div>
    );
  }
}

export default PostItControls;