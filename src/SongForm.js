import React from 'react';

class SongForm extends React.Component {

  state = {
    title: ''
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSong(this.state)
    this.setState({title: ''})
  }

  render() {
    return (
    <div>
      <h3>Add a new song!</h3>
      <form onSubmit={this.handleSubmit}>
        <input name="title" value={this.state.title} onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
    </div>)

  }
}

export default SongForm;
