import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h3 className="logo">Space-X</h3>
      </Link>
      <ul className="navlinks">
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <li>Home</li>
        </Link>
        <Link to="/rocket" style={{ textDecoration: "none" }}>
          <li>Rockets</li>
        </Link>
        <Link to="/ship" style={{ textDecoration: "none" }}>
          <li>Ships</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}
