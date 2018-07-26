import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from "./components/Main";

// <router> is like href but in React. Note, we use react-router-dom npm package to help navigate a route in a browswer
const App = () =>
  <Router>
    <div>
      <Route path="/" component={Main} />
    </div>
  </Router>;

export default App;
