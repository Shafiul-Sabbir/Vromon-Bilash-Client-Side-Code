import React, { useEffect, useState } from 'react';

const UseService = () => {
    const [services,setServices] =useState([]);

    useEffect(() => {
       fetch('https://eerie-skeleton-11591.herokuapp.com/services')
       .then(res=>res.json())
       .then(data=>setServices(data))
    }, []) 
    return (
        
             {
            services
            }
        
    );
};

export default UseService;