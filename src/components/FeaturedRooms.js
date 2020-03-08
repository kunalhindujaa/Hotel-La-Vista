import React, { Component } from "react";
import { RoomContext } from "../context";

class FeaturedRooms extends Component {
  state = {};
  static contextType = RoomContext;
  render() {
    let value = this.context;
    return <p> hello from featured rooms {value.name}</p>;
  }
}

export default FeaturedRooms;
