import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
const CoursesPage = ({data}) => {
  return (
    <div className="row bg-info">
      <Dashboard />
      <h1 className=" fw-bold fst-italic display-3">Courses</h1>
      <div className="container row col-md-8 mb-5" >
        {data.map((course) => {
          return (
            <div className="col-md-6" key={course.id}>
              <div className="card card1 bg-light" >
                <div className="card-body" >
                  <Link className="text-decoration-none" to={`/course/${course.id}`}>
                  <h5 className="card-title pt-4 text-primary fs-2 " >{course.name}</h5>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesPage;
