import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/UseAuth';

const Meubar = () => {
  const {user,logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
    <Navbar.Brand href="#home"> Vromon Bilsah </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"id="responsive-navbar-nav"/>
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link href="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to ="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to ="/offers">OFFERS</Nav.Link>
      {
        user?.email?
        <>
        <Nav.Link as={HashLink} to ="/orders">My Orders</Nav.Link>
        <Nav.Link as={HashLink} to ="/allOrders">Manage All Orders</Nav.Link>
        <Nav.Link as={HashLink} to ="/addService">Add A New Service</Nav.Link>
        </>:
        <>
        </>
      }
      
      {
        user?.email ?
        <Button className="me-2" onClick={logOut} variant ="light">Log out</Button> :
        <Nav.Link as={HashLink} to ="/register">Log in</Nav.Link>
      }
      <Navbar.Text>
        Signed in as : <a style={{textDecoration:"none" }} href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
</Navbar>
        </>
    );
};

export default Meubar;