import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact="true" component={Home}>
      </Route>
      <Route path="/home" component={Home} /> 
      <Route path="/about" component={About} >
        About
      </Route> 
      {/* http://localhost:3000/#/about */}
    </HashRouter>
  );
}

export default App;
