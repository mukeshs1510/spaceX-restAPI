import { Component } from "react/cjs/react.development";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rockets from "./rockets/Rockets";
import Ships from "./Ships/Ships";
import Home from "./Home/Home";
import Aboutus from "./Home/Aboutus";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rocket" component={Rockets} />
            <Route path="/ship" component={Ships} />
            <Route path="/about" component={Aboutus} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
