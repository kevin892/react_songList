import React from 'react';
import Container from './Container';
import SongForm from './SongForm';

class App extends React.Component {
  state = {
        songs: [{
            id: 1,
            title: "Call Me Maybe"
        },{
            id: 2,
            title: "For Whom The Bell Tolls"
        }]
    }

  addSong = (song) => {
    const newSong = {...song, id:Date.now()}
    const songs= [...this.state.songs, newSong]
    this.setState({
      songs
    })
  }

  removeSong = (id) => {
    const songs = this.state.songs.filter(song => song.id !== id)
    this.setState({
      songs
    })
  }

  render(){
    return(
      <div>
        <h1>Song List</h1>
        <Container songs={this.state.songs} removeSong={this.removeSong}/>
        <SongForm addSong={this.addSong}/>
      </div>
    )
  }
}

export default App;
