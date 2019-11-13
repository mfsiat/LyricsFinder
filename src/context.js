// Here lists the provider
// because of exporting consumers also we are not exporting it as default
// our track changes with its state so we are creating a provider
// here and we can wrap all our compoments inside this provider
// using only the consumer
import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks" // the heading changes after the search
  };

  // it's a lifecycle method
  componentDidMount() {
    axios.get(`https://api.musixmatch.com/ws/1.1/`)
      .then(res => console.log(res.data))
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
