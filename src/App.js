import React, { Component } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Countries from "./Components/Countries";
import Footer from "./Components/Footer";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      isShowing: false
    };
  }

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
        console.log(sixCountries);
        this.setState({
          countries: sixCountries
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  openModal = () => {
    this.setState({
      isShowing: true
    })
  };

  closeModal = () => {
    this.setState({
      isShowing: false
    })
  }

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
