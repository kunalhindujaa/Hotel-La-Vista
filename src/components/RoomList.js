import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "../components/Loading";
import Title from "../components/Title";
import Room from "../components/Room";

class RoomList extends Component {
  state = {};
  static contextType = RoomContext;
  render() {
    let { loading, rooms } = this.context;

    let roomList = rooms.map(item => {
      return <Room key={item.id} room={item} />;
    });
    return (
      <>
        <section className="roomsList">
          <Title title="Our Rooms" />
          <div className="roomslist-center">
            {loading ? <Loading /> : roomList}
          </div>
        </section>
      </>
    );
  }
}

export default RoomList;
