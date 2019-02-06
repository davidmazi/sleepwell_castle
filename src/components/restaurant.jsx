import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

class Restaurant extends Component {
  state = {
    restaurantName: "1131",
    postalCode: "21360",
    chef: "Guillaume Royer",
    restaurantUrl: "https://restaurant.michelin.fr//2852181/divellec-paris-07"
  };
  render() {
    return (
      <>
        <Card.Body>
          <Card.Img className="m-2" variant="top" src={this.state.imageUrl} />
          <Card.Title>{this.state.restaurantName}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem variant="info">
            Chef Name : {this.state.chef}
          </ListGroupItem>
          <ListGroupItem>Postal Code : {this.state.postalCode}</ListGroupItem>
        </ListGroup>
        <Card.Body variant="info">
          <Button
            variant="info"
            href="#"
            onClick={() => window.open(this.state.restaurantUrl, "_blank")}
          >
            Restaurant URL
          </Button>
        </Card.Body>
      </>
    );
  }
}

export default Restaurant;
