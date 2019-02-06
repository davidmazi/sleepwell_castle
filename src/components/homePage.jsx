import React, { Component } from "react";
import Row from "react-bootstrap/Row.js";
import starredHotels from "../JSONFiles/starredRelaisChateaux.json";
class HomePage extends Component {
  state = { searchedHotels: [] };

  handleSearch = (location, duration) => {
    const searchedHotels = starredHotels;
    this.setState(searchedHotels);
    // "hotelName":
    // "restaurantName":
    // "postalCode":
    // "chef":
    // "url":
    // "price":
    searchedHotels.forEach(hotel => {}); //TODO search same postalcode, maybe return a list, maybe return each item to render a react component....
  };

  render() {
    return (
      <div>
        <Row className="justify-content-md-center">
          <div>
            <span className="text-md m-2">Where would you like to stay?</span>
            <input
              key="locationInput"
              className="text-md m-2"
              placeholder="Location"
            />
          </div>
          <div>
            <span className="text-md m-2">
              How many nights would you like to stay?
            </span>
            <input
              key="durationInput"
              className="text-md m-2"
              placeholder="Duration"
            />
          </div>
        </Row>
        <Row className="justify-content-md-center">
          <button
            onClick={this.handleSearch}
            className="btn btn-info btn-sm m-2"
            type="submit"
          >
            Search
          </button>
        </Row>
      </div>
    );
  }
}

export default HomePage;
