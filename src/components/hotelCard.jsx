import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import PageProgress from "react-page-progress";
import Hotel from "./hotel.jsx";
import Summary from "./summary.jsx";
import Restaurant from "./restaurant.jsx";

class HotelCard extends Component {
  state = {
    hotelName: "Abbaye de la Bussière",
    restaurantName: "1131",
    postalCode: "21360",
    chef: "Guillaume Royer",
    url:
      "https://www.relaischateaux.com/fr/france/bussiere-cote-d-or-la-bussiere-sur-ouche",
    imageUrl:
      "https://media.relaischateaux.com/public/hash/212bd2a66702672857b38bc0666b1d3d36ed339f",
    priceRange: "225-450€",
    description:
      "Doté d’un lac et d’un jardin botanique, le parc de cette abbaye cistercienne du xiie siècle est empreint d'une longue tradition d’humilité, de paix et d’hospitalité et respire la tranquillité. Magnifiquement restaurée par la famille Cummings, l'Abbaye de la Bussière brille par son architecture discrète à l’extérieur, spectaculaire à l’intérieur, où la décoration a intégré d’anciennes fresques découvertes durant la rénovation du bâtiment. Meubles anciens et tissus soyeux déploient un raffinement sans ostentation, d’une pure élégance. Vous dînerez dans un décor de cathédrale et goûterez les délices d’une carte des vins qui offre le meilleur de la Bourgogne.",
    openDesc: false,
    hotelVisible: true,
    restaurantVisible: false,
    summaryVisible: false
  };

  handleSelect(tab) {
    //to choose which tab is visible and which one is not
    switch (tab) {
      case "#hotel":
        this.setState({ hotelVisible: true });
        this.setState({ restaurantVisible: false });
        this.setState({ summaryVisible: false });
        break;
      case "#restaurant":
        this.setState({ hotelVisible: false });
        this.setState({ restaurantVisible: true });
        this.setState({ summaryVisible: false });
        break;
      case "#summary":
        this.setState({ hotelVisible: false });
        this.setState({ restaurantVisible: false });
        this.setState({ summaryVisible: true });
        break;
      default:
        this.setState({ hotelVisible: true });
        this.setState({ restaurantVisible: false });
        this.setState({ summaryVisible: false });
    }
  }

  render() {
    return (
      <>
        {/* to know the progress of the total scroll page */}
        <PageProgress color={"#6388d1"} height={4} />
        <PageProgress color={"#5270ae"} height={2} />
        <Card className="m-2" border="info" style={{ width: "20rem" }}>
          <Card.Header>
            <Nav
              fill
              className="info"
              variant="pills"
              defaultActiveKey="#hotel"
              onSelect={tab => this.handleSelect(tab)}
            >
              <Nav.Item>
                <Nav.Link color="info" href="#hotel">
                  Hotel
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#restaurant">Restaurant</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#summary">Summary</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          {this.state.hotelVisible ? <Hotel /> : null}
          {this.state.restaurantVisible ? <Restaurant /> : null}
          {this.state.summaryVisible ? <Summary /> : null}
        </Card>
      </>
    );
  }
}

export default HotelCard;
