import React, { Component, useEffect } from "react";
import { TypesShip } from "../Ships/TypesShip";
import { Fragment } from "react/cjs/react.development";
import { CardShips } from "./CardShips";
import { ModelShips } from "./ModelShips";

export default class Ships extends Component {
  constructor() {
    super();

    this.state = {
      ships: [],
      selectedType: "",
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/ships")
      .then((responce) => responce.json())
      .then((ships) => this.setState({ ships: ships }));
  }

  handleChange = (e) => {
    this.setState({ selectedType: e.target.value });
  };

  render() {
    const { ships, selectedType } = this.state;
    const filteredShips = ships.filter((ships) => ships.type == selectedType);
    return (
      <div>
        <h1 style={{ color: "#242b2e" }}>SpaceX Ships Encyclopedia</h1>
        <TypesShip onChange={this.handleChange} />
        <div className="row">
          {filteredShips.map((ships) => (
            <Fragment>
              <CardShips ships={ships} />
              <ModelShips ships={ships} />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}
