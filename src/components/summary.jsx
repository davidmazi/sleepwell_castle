import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class Summary extends Component {
  state = {
    hotelName: this.props.summary.hotelName,
    postalCode: this.props.summary.postalCode,
    hotelUrl: this.props.summary.hotelUrl,
    imageUrl: this.props.summary.imageUrl,
    description: this.props.summary.description,
    priceRange: this.props.summary.priceRange,
    openDesc: false,
    restaurantName: this.props.summary.restaurantName,
    chef: this.props.summary.chef,
    restaurantUrl: this.props.summary.restaurantUrl
  };
  render() {
    const { openDesc } = this.state;
    return (
      <>
        <Card.Body>
          <Card.Img variant="top" src={this.state.imageUrl} />
          <Card.Title className="m-2">{this.state.hotelName}</Card.Title>
          <Card.Text>
            {this.state.description.substring(
              0,
              this.state.description.indexOf(".") + 1
            )}
            <Collapse in={!this.state.openDesc}>
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
            </Collapse>
            <Collapse in={this.state.openDesc}>
              <span id="restOfDesc">
                {this.state.description.substring(
                  this.state.description.indexOf(".") + 1,
                  100000
                )}
              </span>
            </Collapse>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem variant="info">
            Price Range per Night :{" "}
            {this.state.priceRange !== "undefined" && this.state.priceRange}
            {this.state.priceRange === "undefined" && (
              <Badge variant="warning">Contact hotel</Badge>
            )}
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
            View Hotel
          </Button>
          <Button
            className="m-1"
            variant="info"
            href="#restaurantUrl"
            onClick={() => window.open(this.state.restaurantUrl, "_blank")}
          >
            View Restaurant
          </Button>
        </Card.Footer>
      </>
    );
  }
}

export default Summary;
