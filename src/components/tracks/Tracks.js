import React, { Component } from 'react'
import { Consumer } from '../../context';


class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          return <h1>Tracks</h1>
        }}
      </Consumer>
    )
  }
}

export default Tracks;


// the value of the state from context provider will be passed inside this value 