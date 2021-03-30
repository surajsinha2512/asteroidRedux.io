import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Country from './Country';
import Weather from './Weather';

export default function Display() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/country">Country</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/country">
            <Country/>
          </Route>
          <Route path="/weather">
           <Weather/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}






