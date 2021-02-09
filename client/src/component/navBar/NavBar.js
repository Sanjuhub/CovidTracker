import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div class="nav-main">
        <div class="sidebar">
          <div class="header">
            <h4>
              <i class="fas fa-radiation"></i> Covid Tracker
            </h4>
            <h5>India</h5>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-home"></i>Home
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-question-circle"></i>About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
