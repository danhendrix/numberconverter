import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home';



class NumberConverter extends React.Component {
  render() {
    return (
        <Router>
            <div>
                <Home />
            </div>
        </Router>
    )
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<NumberConverter />, mountNode);