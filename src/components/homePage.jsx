import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import PageProgress from "react-page-progress";
import Jumbotron from "react-bootstrap/Jumbotron";
import starredHotels from "../JSONFiles/starredRelaisChateaux.json";
import CardColumns from "react-bootstrap/CardColumns";
import HotelCard from "./hotelCard.jsx";

export class HomePage extends Component {
  state = { starredHotels: starredHotels, searchedHotels: [], searchValue: "" };

  handleChange = event => {
    var searchedHotels = [];
    var searchValue = event.target.value;
    this.setState({ searchValue: searchValue });
    starredHotels.forEach(hotel => {
      if (
        String(hotel.postalCode)
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      ) {
        searchedHotels.push(hotel);
      } else if (
        String(hotel.hotelName)
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      ) {
        searchedHotels.push(hotel);
      } else if (
        String(hotel.restaurantName)
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      ) {
        searchedHotels.push(hotel);
      } else if (
        String(hotel.priceRange)
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      ) {
        searchedHotels.push(hotel);
      } else if (
        String(hotel.chef)
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      ) {
        searchedHotels.push(hotel);
      }
      this.setState({ searchedHotels });
    });
  };
  render() {
    return (
      <>
        <PageProgress color={"#6388d1"} height={4} />
        <Jumbotron className="m-3">
          <h3 className="text-center" style={{ color: "#6388d1" }}>
            Search for Michelin Starred Relais & Chateaux Hotels
          </h3>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="addon">Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Name, Location, Chef, Restaurant..."
              aria-label="Username"
              aria-describedby="addon"
              value={this.state.searchValue}
              onChange={this.handleChange}
            />
          </InputGroup>
          <CardColumns>
            {this.state.searchedHotels.map(hotelCard => (
              <HotelCard key={hotelCard.id} hotelCard={hotelCard} />
            ))}
          </CardColumns>
        </Jumbotron>
      </>
    );
  }
}

export default HomePage;
