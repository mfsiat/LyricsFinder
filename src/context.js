// Here lists the provider
// because of exporting consumers also we are not exporting it as default
// our track changes with its state so we are creating a provider
// here and we can wrap all our compoments inside this provider
// using only the consumer
import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

// this is a reducer 
const reducer = (state, action) => {
  switch(action.type){
    case 'SEARCH_TRACKS':
      return {
        ...state,
        track_list: action.payload,
        heading: 'Search Results'
      };
      default: 
      return state
  }
}

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks", 
    dispatch: action => this.setState(state => reducer(state, action))
  };

  // it's a lifecycle method
  // this mm api has some problem so we are using another proxy with our api 
  // we are putting the proxy in front of our url and the request will go through 
  // the proxy 
  // here goes the request 
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        // console.log(res.data);
        this.setState({track_list: res.data.message.body.track_list});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// we need to export the consumer
export const Consumer = Context.Consumer;
