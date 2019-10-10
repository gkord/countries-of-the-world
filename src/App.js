import React, { Component } from 'react'
import axios from "axios";

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
      console.log(res);
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
        <h1>{this.state.country}</h1>
        <img src={this.state.flag} alt="{`Flag of ${this.state.country}`}"/>
      </div>
    )
  }
}
