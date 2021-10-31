import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    const [users, setusers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setusers(data))
    }, [])

    //Delete an User
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete??');
        if (proceed){
            const url = `https://eerie-skeleton-11591.herokuapp.com/services/${id}`
        fetch(url,{
            method:'DELETE'
        })
        
        .then(res=>res.json())
        .then(data =>{
            if(data.deletedCount>0){
                alert('deletd successfully');
                const remainingUser = users.filter(user=>user._id!==id)
                setusers(remainingUser);
            }
        })
        }
    }
    return (
        <div>
            <h2>Users Available : {users.length}</h2>
            <ul>
                {
                    users.map(user=><li
                    key = {user._id}
                    >
                        {user.name} :: {user.email}
                       <Link to={`/users/update/${user._id}`}> <button>Update</button> </Link>
                        <button onClick={()=>handleDeleteUser(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default ManageAllOrders;