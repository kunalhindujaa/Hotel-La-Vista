import React, { Component } from "react";

class Contact extends Component {
  state = {
    name: " ",
    phone: "",
    email: "",
    listItem: "React",
    gender: "",
    check1: "No",
    check2: "No",
    registered: "No"
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h4> Have query, please feel free to contact us</h4>
        <h4>
          Fill out the query form below, and we'll reach to you within 24 hours
        </h4>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="userName"
            value={this.state.name}
            placeholder="Enter your name"
            onChange={this.handleChange}
          />
          <label>Contact No</label>
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            placeholder="Enter your Contact number"
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name={this.state.email}
            placeholder="Your email address"
          />
        </form>
      </div>
    );
  }
}

export default Contact;
