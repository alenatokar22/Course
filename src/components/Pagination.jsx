import React from "react";

const Pagination = ({ coursesPerPage, totalCourses, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page__item" key={"pagination" + number}>
            <button
              className="page__btn"
              onClick={() => paginate(number)}
              
              style={{backgroundColor: number === currentPage ? "red" : "yellow",
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
