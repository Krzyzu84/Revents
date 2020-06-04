import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";
import { List, Image } from "semantic-ui-react";

class EventListAtendee extends Component {
  render() {
    const { atendee } = this.props;
    return (
      <List.Item>
        <Image as="a" size="mini" circular src={atendee.photoURL} />
      </List.Item>
    );
  }
}

export default EventListAtendee;
