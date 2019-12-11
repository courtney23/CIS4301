import React from 'react';
import logo from '../logo.svg';
import {Nav, Navbar } from 'react-bootstrap';




const Header = () => (

        <Navbar bg="light" variant="light" fixed="top" expand="sm">
       
            <Navbar.Brand id="logo-link" href="/">
                SSWC
            </Navbar.Brand> 
            
            {/* Page Links */}

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav classname="ml-auto">
                
                <Nav.Link href='/about'>About Us</Nav.Link>
                <Nav.Link href='/sightings'>Sightings</Nav.Link>
                <Nav.Link href='/features'>Features</Nav.Link>
                <Nav.Link href='/flowers'>Flowers</Nav.Link>
        
                </Nav>
                </Navbar.Collapse>
        </Navbar>

        
    )

    


export default Header;