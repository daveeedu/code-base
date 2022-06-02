import React from 'react'
import { useParams } from 'react-router-dom'
import courses from "../data/Data";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const CourseDetails = ({data}) => {
  const { id } = useParams();
  const i = id - 1;
  console.log(id);
  return (
    <div className="row bg-info vh-100">
      <IconContext.Provider value={{ color: '#fff', size: '3em' }}>
      <Link className="d-flex justify-content-start ms-5 mt-3" to="/CoursesPage"><FaArrowLeft /></Link>
      <h1 className=" fw-bold fst-italic display-3">{data[i].name}</h1>
      <p className="lead w-50 m-auto">{data[i].details.intro}</p>
      <ol className="list-group list-group-numbered list-group-horizontal">
        {courses[i].details.branches.map((branch, index) => 
        <li className="list-group-item list1 bg-transparent border-0 text-dark" key={index}>{branch}</li>)}
      </ol>
      </IconContext.Provider>
      </div>
  );
};


export default CourseDetails;
