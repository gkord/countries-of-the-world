import React from "react";

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
  <nav>
      <ul className="pagination">
          {pageNumbers.map(pageNumber => (
              <li key={pageNumber} className="page-item">
                  <a onClick={()=> paginate(pageNumber)} href="!#" className="page-link">
                      {pageNumber}
                  </a>
              </li>
          ))}
      </ul>
  </nav>
  )
};

export default Pagination;
