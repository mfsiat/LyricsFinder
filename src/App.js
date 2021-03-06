import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";

import Lyrics from "./components/tracks/Lyrics";

// Because The Provider is not a default we need to
// import it inside curly braces 
// import Provider from './context';

import { Provider } from './context';

import "./App.css";

function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
