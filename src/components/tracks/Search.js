import React, { Component } from "react";
import axios from "axios";

import { Consumer } from "../../context";

// it will be a class based component 
class Search extends Component {
  // we have to manipulate the global state 
  state = {
    trackTitle: ""
  };

  // finds the track 
  // we are just using the search url given by the api provider
  // 
  findTrack = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        console.log(res.data);
        // this.setState({track_list: res.data.message.body.track_list});
      })
      .catch(err => console.log(err));

  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music"></i> Search For a Song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={this.findTrack}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song title...."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  ></input>
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block mb-5"
                  type="submit"
                >
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
