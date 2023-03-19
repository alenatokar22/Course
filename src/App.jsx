import React, { useState } from "react";
import "./App.css";
import { getFetchData } from "./components/Fetch";
import Courses from "./components/Courses";
import Pagination from "./components/Pagination";

const COURSES_ON_PAGE = 10;
const FIRST_PAGE_NUMBER = 1;

export function App() {
  const { dataResponse, error } = getFetchData();
  const courses = dataResponse.courses ? dataResponse.courses : [];
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE_NUMBER);
  const [coursesPerPage] = useState(COURSES_ON_PAGE);

  const lastCoursesIndex = currentPage * coursesPerPage;
  const firstCoursesIndex = lastCoursesIndex - coursesPerPage;
  const currentCourses =
    courses.length === 0
      ? []
      : courses.slice(firstCoursesIndex, lastCoursesIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {error ? (
        NetworkError(error)
      ) : (
        <div className="App">
          {currentCourses.map((courseItem, index) => (
            <Courses
              key={"courseItem" + index}
              courseItem={courseItem}
              index={
                currentPage === 1
                  ? index + 1
                  : coursesPerPage * currentPage + index + 1 - coursesPerPage
              }
            />
          ))}
        </div>
      )}
      <Pagination
        coursesPerPage={coursesPerPage}
        totalCourses={courses.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
