import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Service from "../components/Service";
import FeaturedRooms from "../components/FeaturedRooms";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Hotell La Vista"
          subtitle="Stay at the finest hotels in India"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRooms />
    </React.Fragment>
  );
};

export default Home;
