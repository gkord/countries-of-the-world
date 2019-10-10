import React from "react";
import Modal from "./Modal";

const Countries = props => {
  return (
    <div className="country-container">
      {props.countryList.map(country => {
        return (
          <div className="country" key={country.numericCode}>
            <p>{country.name}</p>
            <img src={country.flag} alt={country.name} />
            <button onClick={props.openModal}>Click For More Facts</button>
          </div>
        );
      })}
      {props.isShowing && (
        <Modal
          countryList={props.countryList}
          closeModal={props.closeModal}
        />
      )}
    </div>
  );
};

export default Countries;
