import React from 'react';
import SongItem from './SongItem';

const Container = (props) => {
  const songCards = props.songs.map((song, idx) => <SongItem{...song} key={Date.now() + idx} removeSong={props.removeSong}/>)

  return (
  <div>
    <ul>{songCards}</ul>
  </div>)
}

export default Container;
