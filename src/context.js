// Here lists the provider
// because of exporting consumers also we are not exporting it as default
// our track changes with its state so we are creating a provider 
// here and we can wrap all our compoments inside this provider 
// using only the consumer 
import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name:'abc' } },
      { track: { track_name:'123' } },
    ],
    heading: 'Top 10 Tracks'  // the heading changes after the search 
  }

  render() {
    return (
      <Context.Provider value={this.state} >
        {this.props.children}
      </Context.Provider>
    )
  }
}

// we need to export the consumer 
export const Consumer = Context.Consumer;
