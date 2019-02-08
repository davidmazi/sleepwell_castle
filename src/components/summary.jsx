import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class Sumarry extends Component {
  state = {
    hotelName: "",
    postalCode: "",
    hotelUrl: "",
    imageUrl: "",
    priceRange: "",
    description: "",
    openDesc: false,
    restaurantName: "",
    chef: "",
    restaurantUrl: ""
  };
  render() {
    const { openDesc } = this.state;
    return (
      <>
        <Card.Body>
          <Card.Img variant="top" src={this.state.imageUrl} />
          <Card.Title className="m-2">{this.state.hotelName}</Card.Title>
          <Card.Text>
            {this.state.description.substring(0, 200).split(".")[0]}.
            <Badge
              pill
              className="m-2"
              size="sm"
              variant="secondary"
              onClick={() => this.setState({ openDesc: !openDesc })}
              aria-controls="restOfDesc"
              aria-expanded={openDesc}
            >
              . . .
            </Badge>
            <Collapse in={this.state.openDesc}>
              <span id="restOfDesc">
                {this.state.description.substring(0, 200).split(".")[1]}
                {this.state.description.substring(200, 100000)}
              </span>
            </Collapse>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem variant="info">
            Price Range per Night : {this.state.priceRange}
          </ListGroupItem>
          <ListGroupItem>Chef Name : {this.state.chef}</ListGroupItem>
          <ListGroupItem variant="info">
            Restaurant Name : {this.state.restaurantName}
          </ListGroupItem>
          <ListGroupItem>Postal Code : {this.state.postalCode}</ListGroupItem>
        </ListGroup>
        <Card.Footer variant="info">
          <Button
            className="m-1"
            variant="info"
            href="#hotelUrl"
            onClick={() => window.open(this.state.hotelUrl, "_blank")}
          >
            Hotel URL
          </Button>
          <Button
            className="m-1"
            variant="info"
            href="#restaurantUrl"
            onClick={() => window.open(this.state.restaurantUrl, "_blank")}
          >
            Restaurant URL
          </Button>
        </Card.Footer>
      </>
    );
  }
}

export default Sumarry;
