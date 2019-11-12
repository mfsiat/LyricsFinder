// Here lists the provider
// because of exporting consumers also we are not exporting it as default
import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  render() {
    return (
      <Context.Provider>
        {this.props.children}
      </Context.Provider>
    )
  }
}
