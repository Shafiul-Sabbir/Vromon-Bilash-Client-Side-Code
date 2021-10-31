import React, {useRef} from 'react';

const AddNewService = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = e =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = {name:name, email:email};

        fetch('https://eerie-skeleton-11591.herokuapp.com/services',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('seccessfully added the user')
                e.target.reset();
            }
        })
        e.preventDefault();
    }
    return (
        <div className="justify-content-center">
           <div>
           <h2 className="m-5 ">Please Add an User</h2>
            <form className="m-5 " onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} />
                <input type="email" name="" id="" ref={emailRef} />
                <input type="submit" value="Add" />
            </form>
           </div>
        </div>
    );
};

export default AddNewService;