import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import axios from "../axios-path";

class Contact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    query: ""
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  sendQuery = event => {
    const queries = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      query: this.state.query
    };
    console.log(queries);

    axios
      .post("/queries.json", queries)
      .then(response => console.log(response))
      .catch(error => console.log(error));

    alert(
      "Thankyou for contacting us. Someone from our team will reach out to you within 2 working days."
    );
    this.setState({
      name: "",
      phone: "",
      email: "",
      query: ""
    });

    // alert(
    //   "Name: " +
    //     this.state.name +
    //     "\nContact: " +
    //     this.state.phone +
    //     "\nEmail:" +
    //     this.state.email
    // );
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Hero hero="roomsHero">
          <Banner title="Hotel La Vista" subtitle="At your Service, Since 1999">
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </Banner>
        </Hero>
        <div className="contact-div">
          <h5>
            Have Query <ContactSupportIcon /> <br />
            please feel free to contact us
          </h5>
          <h5>
            Fill out the query form below, and we'll contact you within 24 hours
          </h5>
          <div className="div-line"></div>
          <form className="form-div">
            <table style={{ cellPadding: "25px" }}>
              <tbody>
                <tr>
                  <td>
                    <label>Name</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      placeholder="Enter your full name"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <label>Contact No</label>
                  </td>
                  <td>
                    <input
                      type="tel"
                      name="phone"
                      value={this.state.phone}
                      placeholder="Enter your Contact number"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <label>Email</label>
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      placeholder="Your email address"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <label> Your Query </label>
                  </td>
                  <td>
                    <textarea
                      rows="10"
                      cols="42"
                      name="query"
                      value={this.state.query}
                      placeholder="Enter your Query here"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="btn-primary" onClick={this.sendQuery}>
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
