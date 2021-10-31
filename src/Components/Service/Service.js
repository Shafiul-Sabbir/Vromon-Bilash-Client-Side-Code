import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {key,name,img,description}= service;
    return (
        <div className="service pb-3">
               <img src={img} alt=""  />
               <br /><br />
               <h3>{name}</h3>
               <br />
               <p className="px-3">{description}</p>
               <Link to={`/details/${key}`}>
               <button className="btn btn-primary">View Details of {name.toLowerCase()}</button>
               </Link>
            </div>
    );
};

export default Service;