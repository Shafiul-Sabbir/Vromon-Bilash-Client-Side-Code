import React from 'react';
import UseService from '../../Hooks/UseService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const {services} = UseService();
    return (
        <div id="services">
              <div className="services-margin">----******----</div>
            <h1 className="text-primary">Our Services</h1>
            
           
           <div className="service-container">
           {
               services.map(service => <Service
               key={service.key}
                service={service}
               ></Service>
                )
           }
           </div>
           

        </div>
    );
};

export default Services;