import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

class Restaurant extends Component {
  state = {
    restaurantName: this.props.restaurant.restaurantName,
    postalCode: this.props.restaurant.postalCode,
    chef: this.props.restaurant.chef,
    restaurantUrl: this.props.restaurant.restaurantUrl
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
        <Card.Footer variant="info">
          <Button
            variant="info"
            href="#"
            onClick={() => window.open(this.state.restaurantUrl, "_blank")}
          >
            View
          </Button>
        </Card.Footer>
      </>
    );
  }
}

export default Restaurant;
