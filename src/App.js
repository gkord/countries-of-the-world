import React, { Component } from 'react'
import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default class App extends Component {
  constructor(){
    super()
    this.state ={
      country: '',
      flag: ''
    }
  }

componentDidMount() {
  axios({
    method: "GET",
    url: "https://restcountries.eu/rest/v2/all",
    dataResponse: "json",
    params: {
      format: "json"
    },
  })
    .then(res => {
      const sixCountries = res.data.slice(0,6);
      console.log(sixCountries);
      this.setState({
        country: res.data[0].name,
        flag: res.data[0].flag
      })
    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <h2>{this.state.country}</h2>
        <img src={this.state.flag} alt={`Flag of ${this.state.country}`}/>
        <Footer />
      </div>
    )
  }
}
