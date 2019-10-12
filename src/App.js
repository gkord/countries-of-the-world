import React, { Component } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Search from "./Components/Search"
import Countries from "./Components/Countries";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      isShowing: false,
      searchResult: ''
    };
  }

  //make our API call on page load and render data
  componentDidMount() {
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      searchResult: this.state.searchResult
    })
    this.getCountry();
  }

  getCountry = () => {
    axios({
      method: "GET",
      url: `https://restcountries.eu/rest/v2/region/${this.state.searchResult}`,
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
        console.log(this.state.countries);
      })
      .catch(err => {
        alert(err);
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
        <Search 
        searchResult={this.state.searchResult}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
        <Countries
          countryList={this.state.countries}
          openModal={this.openModal}
          closeModal={this.closeModal}
          isShowing={this.state.isShowing}
          activeCountry={this.state.activeCountry}
          changeActive={this.changeActive}
        />
        {this.state.isShowing && (
          <Modal
            closeModal={this.closeModal}
          >
            {this.state.countries.map(country => {
              return country.name
            })}
          </Modal>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
