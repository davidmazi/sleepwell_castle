import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Hotel from "./hotel.jsx";
import Summary from "./summary.jsx";
import Restaurant from "./restaurant.jsx";

class HotelCard extends Component {
  state = {
    id: this.props.hotelCard.id,
    hotelName: this.props.hotelCard.hotelName,
    restaurantName: this.props.hotelCard.restaurantName,
    postalCode: this.props.hotelCard.postalCode,
    chef: this.props.hotelCard.chef,
    url: this.props.hotelCard.url,
    imageUrl: this.props.hotelCard.imageUrl,
    priceRange: this.props.hotelCard.priceRange,
    description: this.props.hotelCard.description,
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
    const hotel = {
      id: this.state.id,
      hotelName: this.state.hotelName,
      restaurantName: this.state.restaurantName,
      postalCode: this.state.postalCode,
      chef: this.state.chef,
      url: this.state.url,
      imageUrl: this.state.imageUrl,
      description: this.state.description,
      priceRange: this.state.priceRange
    };
    return (
      <>
        {/* to know the progress of the total scroll page */}
        <Card className="m-2" border="info" style={{ width: "fill" }}>
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
          {this.state.hotelVisible ? <Hotel hotel={hotel} /> : null}
          {this.state.restaurantVisible ? <Restaurant /> : null}
          {this.state.summaryVisible ? <Summary /> : null}
        </Card>
      </>
    );
  }
}

export default HotelCard;
