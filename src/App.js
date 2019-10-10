import React, { Component } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Countries from "./Components/Countries";
import Footer from "./Components/Footer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      isShowing: false
    };
  }

  //make our API call on page load and render data
  componentDidMount() {
    axios({
      method: "GET",
      url: "https://restcountries.eu/rest/v2/all",
      dataResponse: "json",
      params: {
        format: "json"
      }
    })
      .then(res => {
        const sixCountries = res.data.slice(0, 6);
        this.setState({
          countries: sixCountries
        });
        console.log(this.state.countries)
      })
      .catch(err => {
        console.log(err);
      });
  }

  //opens our modal
  openModal = () => {
    this.setState({
      isShowing: true,
    });
  };
  // closes our modal
  closeModal = () => {
    this.setState({
      isShowing: false
    });
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <Countries
          countryList={this.state.countries}
          openModal={this.openModal}
          closeModal={this.closeModal}
          isShowing={this.state.isShowing}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
