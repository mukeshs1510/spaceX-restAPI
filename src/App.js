import {
  Component,
  Fragment,
  TochableOpacity,
} from "react/cjs/react.development";
import "./App.css";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter";
import { Model } from "./components/Model";

class App extends Component {
  constructor() {
    super();

    this.state = {
      rockets: [],
      selectedHeight: 0,
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((responce) => responce.json())
      .then((rockets) => this.setState({ rockets: rockets }));
  }

  handleChange = (e) => {
    this.setState({ selectedHeight: e.target.value });
  };

  render() {
    const { rockets, selectedHeight } = this.state;
    const filteredRockets = rockets.filter(
      (rocket) => rocket.height.feet > selectedHeight
    );

    return (
      <div className="container">
        <h1>SpaceX Rockets Encyclopedia</h1>
        <Filter onChange={this.handleChange} />
        <div className="row">
          {filteredRockets.map((rocket) => (
            <Fragment>
              <Card rocket={rocket} />
              <Model rocket={rocket} />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
