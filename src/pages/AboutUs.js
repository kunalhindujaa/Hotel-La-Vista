import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const Aboutus = () => {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="Hotel La Vista" subtitle="At your Service, Since 1999">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <div className="about-us">
        <Title title="Our Story" />
        <p>
          Ut arcu lacus, maximus nec augue at, dignissim consectetur enim. Proin
          laoreet, neque nec ultrices consequat, nulla lectus vehicula sem, id
          rhoncus sem magna id elit. Quisque nec erat vitae nisi convallis
          sagittis. Aenean hendrerit magna in nulla laoreet, eget maximus enim
          malesuada. Sed efficitur aliquet lorem, nec pellentesque lorem mattis
          nec. Fusce sagittis magna quam, in tincidunt purus viverra id.
          Vestibulum quis lorem tellus.
        </p>
        <p>
          Ut arcu lacus, maximus nec augue at, dignissim consectetur enim. Proin
          laoreet, neque nec ultrices consequat, nulla lectus vehicula sem, id
          rhoncus sem magna id elit. Quisque nec erat vitae nisi convallis
          sagittis. Aenean hendrerit magna in nulla laoreet, eget maximus enim
          malesuada. Sed efficitur aliquet lorem, nec pellentesque lorem mattis
          nec. Fusce sagittis magna quam, in tincidunt purus viverra id.
          Vestibulum quis lorem tellus.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Aboutus;
