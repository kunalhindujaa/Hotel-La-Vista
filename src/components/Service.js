import React, { Component } from "react";
import Title from "./Title";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import WifiIcon from "@material-ui/icons/Wifi";

class Service extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <LocalBarIcon />,
        title: "Free Drinks",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero"
      },
      {
        id: 2,
        icon: <LocalParkingIcon />,
        title: "ample Parking Space ",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero"
      },
      {
        id: 3,
        icon: <WifiIcon />,
        title: "Free Wifi",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero"
      },
      {
        id: 4,
        icon: <AirportShuttleIcon />,
        title: "Free Pick and Drop",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article className="service" key={item.id}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Service;
