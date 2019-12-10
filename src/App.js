import React, { useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Countries from "./Components/Countries";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {

  const [state, setState] = useState({
    countries: [],
    isShowing: false,
    searchResult: ""
  })  

  //logs the data typed into search field and sets state
  const handleChange = e => {
    e.persist();
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  //handles user click on submit button and calls our API
  const handleSubmit = event => {
    event.preventDefault();
    setState(prevState => ({
      ...prevState,
      searchResult: state.searchResult
    }));
    getCountry();
  };

  //API call lives in here
  const getCountry = () => {
    axios({
      method: "GET",
      url: `https://restcountries.eu/rest/v2/region/${state.searchResult}`,
      dataResponse: "json",
      params: {
        format: "json"
      }
    })
      .then(res => {
        const sixCountries = res.data.slice(0, 6);
        setState(prevState => ({
          ...prevState,
          countries: sixCountries
        }));
      })
      .catch(err => {
        alert(err);
      });
  };

  //opens our modal
  const openModal = () => {
    setState(prevState =>({
      ...prevState,
      isShowing: true
    }));
  };
  // closes our modal
  const closeModal = () => {
    setState(prevState => ({
      ...prevState,
      isShowing: false
    }));
  };

    return (
      <div className="app-container">
        <Header />
        <Search
          searchResult={state.searchResult}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Countries
          countryList={state.countries}
          openModal={openModal}
          closeModal={closeModal}
          isShowing={state.isShowing}
          activeCountry={state.activeCountry}
        />
        {state.isShowing && (
          <Modal closeModal={closeModal}>
            {state.countries.map(country => {
              return country.name;
            })}
          </Modal>
        )}
        <Footer />
      </div>
    );
  }

export default App;
