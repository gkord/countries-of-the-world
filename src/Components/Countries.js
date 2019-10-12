import React from "react";

const Countries = ({ countryList, openModal }) => {
  return (
    //map through our array of countries and return necessary values
    <div className="country-container">
      {countryList.map(country => {
        return (
          <div className="country" key={country.numericCode}>
            <p>{country.name}</p>
            <img src={country.flag} alt={country.name} />
            <button className="fact-button" onClick={openModal}>
              Click For More Facts
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
