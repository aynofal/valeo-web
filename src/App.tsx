import React from 'react';
import {Counter} from './features/counter/Counter';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import NavBar from "./components/nav-bar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <header className="App-header">
          <div>
            <Switch>
              <Route path="/counter">
                <Counter/>
              </Route>
              <Route path="/">
                <h2>Welcome to Valeo Service test web application</h2>
              </Route>
            </Switch>
          </div>
        </header>
      </Router>
    </div>
  );
}

export default App;
