import React from 'react';
import Movies from './Movies';
import NoMatch from './NoMatch';
import Detail from './Detail';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
 

return (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movie/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>);
   

}

export default App;

