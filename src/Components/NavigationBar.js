import React, {Component, useEffect, useState} from 'react';
import { Navbar, Brand, Toggle, Collapse, Header, Nav, Button, Container, Link  } from 'react-bootstrap'

import './images.css';

const NavigationBar = () => {

        return (

            <>
                <div style={{width: "100%", position: "sticky", top: 0, zIndex: 2, padding: 0}}>
                    <Navbar style={{backgroundColor: '#111111'}}  expand="lg">
                        <Container className='nav-row'>
                            <Navbar.Brand className='duelo-logo'>
                                <img src="Assests\duello logo3.png" alt="logo" className='logo'/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle'/>
                            <Navbar.Collapse id="basic-navbar-nav" className='toggle-bg'>
                                <Nav className="mr-aut right">
                                    <Nav.Link href="#home" className="nav-items">Home</Nav.Link>
                                    <Nav.Link href="#agenda" className="nav-items">Agenda</Nav.Link>
                                    <Nav.Link href="#guideline" className="nav-items">Guideline</Nav.Link>
                                    <Nav.Link href="#prizes" className="nav-items">Prizes</Nav.Link>
                                    <Nav.Link href="#sponsors" className="nav-items">Sponsors</Nav.Link>
                                    <Nav.Link href="#help" className="nav-items">Help</Nav.Link>
                                    <Button className="btn btn-primary" href="https://forms.gle/CMexeNrHgwdW2UGy8">Resgister</Button>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>    
                    </Navbar>
                </div>
            </>



        );
}

export default NavigationBar