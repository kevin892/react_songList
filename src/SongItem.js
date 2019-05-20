import React from 'react';

const SongItem = (props) => {

  return (<div>
    <li>{props.title}
      <button onClick={() => props.removeSong(props.id)}>Delete</button>
    </li>
  </div>)
}
export default SongItem
