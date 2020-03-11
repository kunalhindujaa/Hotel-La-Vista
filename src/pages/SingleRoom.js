import React, { Component } from "react";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {};
  render() {
    return <div> Hello from Single Room </div>;
  }
}

export default SingleRoom;
