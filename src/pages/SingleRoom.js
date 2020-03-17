import React, { Component } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import Modal from "react-modal";
import axios from "../axios-path";

Modal.setAppElement("#root");
class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      slug: this.props.match.params.slug,
      isOpen: false,
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      roomPrice: ""
    };
  }

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  bookRoom = event => {
    const userBookings = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNo: this.state.phoneNo,
      email: this.state.email,
      roomName: this.state.slug,
      bookingAmount: this.state.roomPrice
    };

    axios
      .post("/bookings.json", userBookings)
      .then(response => console.log(response))
      .catch(error => console.log(error));

    alert(
      "Thankyou for choosing us. Your booking details will be sent to you on your provided email id"
    );

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: ""
    });
    event.preventDefault();
  };

  resetDetails = event => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: ""
    });

    event.preventDefault();
  };

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> No such room found...</h3>
          <Link to="/rooms" className="btn-primary">
            Return to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      price,
      pets,
      breakfast,
      size,
      extras,
      images
    } = room;
    const [main, ...detailImages] = images;

    let amount = price;
    this.state.roomPrice = amount;

    // this.setState({
    //   // ...this.state,
    //   roomPrice: price
    // });

    return (
      <React.Fragment>
        <StyledHero img={main}>
          <Banner title={` ${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {detailImages.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3> Details </h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3> Info </h3>
              <h6> price : {`$ ${price} `}</h6>
              <h6> size : {` $ ${size} SQFT`}</h6>
              <h6>
                Max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6> {breakfast && "Free Breakfast Included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6> Extras </h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> {` - ${item}`} </li>;
            })}
          </ul>
        </section>
        <section className="book-section">
          <button
            className="btn-primary btn-booking"
            onClick={() => {
              this.setState({ isOpen: true });
            }}
          >
            Book Now
          </button>
        </section>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={() => {
            this.setState({ isOpen: false });
          }}
        >
          <h3 className="booking-heading"> Guest Details</h3>
          <form className="form-div">
            <table style={{ cellPadding: "5px" }}>
              <tbody>
                <tr>
                  <td>
                    <label>First Name </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="firstName"
                      value={this.state.firstName}
                      placeholder="Your first name"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <label>Last Name </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="lastName"
                      value={this.state.lastName}
                      placeholder="Your Last name"
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
                      name="phoneNo"
                      value={this.state.phoneNo}
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
                    <label> Booking for </label>
                  </td>
                  <td>
                    <input type="text" value={name} readOnly />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <label> Amount </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="amount"
                      value={`$${this.state.roomPrice} USD `}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <button className="btn-primary" onClick={this.bookRoom}>
                      Book
                    </button>
                  </td>
                  <td>
                    <button className="btn-primary" onClick={this.resetDetails}>
                      Reset
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default SingleRoom;
