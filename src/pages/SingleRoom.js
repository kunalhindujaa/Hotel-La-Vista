import React, { Component } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }
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
      </React.Fragment>
    );
  }
}

export default SingleRoom;
