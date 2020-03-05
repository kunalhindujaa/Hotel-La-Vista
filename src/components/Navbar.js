import React, { Component } from "react";
import logo from "../images/logo.PNG";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleClick = event => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img className="img" src={logo} alt="logo-image" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleClick}
            >
              <MenuIcon className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/rooms"> Rooms</Link>
            </li>
            <li>
              <Link to="/about-us"> About Us</Link>
            </li>
            <li>
              <Link to="/contact-us"> Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
