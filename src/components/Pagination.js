import React from "react";
import "./css/pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pg-box">
      <ul className="pagination justify-content-center">
        {/* <li class="page-item">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li> */}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        {/* <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Pagination;
