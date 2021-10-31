import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import UseService from '../../Hooks/UseService';


const ServiceDetails = () => {
    const { detailsId } = useParams();
    const { services } = UseService();
    const [singleService,setSingleService]= useState([])

    useEffect(() => {
        if (services.length > 0) {
            const Details = services?.find((service) => service.key === Number(detailsId));
            setSingleService(Details);

        }
    }, [services, detailsId]);

    return (
        <div>
            
            
            <img height='300px' src={singleService?.img} alt="" />
            <h2 className='text-danger'>{singleService?.name}</h2>
            <h5>{singleService?.description}</h5>
            <br />
            <br />
            <Link  to='/orders'><Button style={{ textDecoration: 'none', color: 'green', fontSize: '30px' }}>Book Your Ticket for {singleService.name}</Button></Link>
            <br /><br />
            <Link  to='/home'><Button style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>Back</Button></Link>
            <br />
           
            
        
        </div>
    );
};

export default ServiceDetails;