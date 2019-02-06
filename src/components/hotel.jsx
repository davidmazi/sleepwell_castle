import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class Hotel extends Component {
  state = {
    hotelName: "Abbaye de la Bussière",
    postalCode: "21360",
    hotelUrl:
      "https://www.relaischateaux.com/fr/france/bussiere-cote-d-or-la-bussiere-sur-ouche",
    imageUrl:
      "https://media.relaischateaux.com/public/hash/212bd2a66702672857b38bc0666b1d3d36ed339f",
    priceRange: "225-450€",
    description:
      "Doté d’un lac et d’un jardin botanique, le parc de cette abbaye cistercienne du xiie siècle est empreint d'une longue tradition d’humilité, de paix et d’hospitalité et respire la tranquillité. Magnifiquement restaurée par la famille Cummings, l'Abbaye de la Bussière brille par son architecture discrète à l’extérieur, spectaculaire à l’intérieur, où la décoration a intégré d’anciennes fresques découvertes durant la rénovation du bâtiment. Meubles anciens et tissus soyeux déploient un raffinement sans ostentation, d’une pure élégance. Vous dînerez dans un décor de cathédrale et goûterez les délices d’une carte des vins qui offre le meilleur de la Bourgogne.",
    openDesc: false
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
          <ListGroupItem>Postal Code : {this.state.postalCode}</ListGroupItem>
        </ListGroup>
        <Card.Body variant="info">
          <Button
            variant="info"
            href="#"
            onClick={() => window.open(this.state.hotelUrl, "_blank")}
          >
            Hotel URL
          </Button>
        </Card.Body>
      </>
    );
  }
}

export default Hotel;
