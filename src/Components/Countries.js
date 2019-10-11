import React from "react";
import Modal from "./Modal";

const Countries = ({countryList, openModal, closeModal, isShowing})=> {
  
  return (
    //map through our array of countries and return necessary values
    <div className="country-container">
      {countryList.map(country => {
        return (
          <div className="country" key={country.numericCode}>
            <p>{country.name}</p>
            <img src={country.flag} alt={country.name} />
            <button onClick={openModal}>Click For More Facts</button>
          </div>
        );
      })}
      {isShowing && (
        <Modal
          countryList={countryList}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Countries;
