import React, {Component} from 'react'
import './Header.css'
import {Navbar, Nav,Button,Form} from 'react-bootstrap'

/*
    Header component for navbar nav 
    Navbar for desktop and                                         
*/

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Navbar className="navbar" expand="lg">
                    <Navbar.Brand href="#home">Currex</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggler" />
                    <Navbar.Collapse className="Header-navbar" id="basic-navbar-nav">
                        <Nav className="mr-auto" defaultActiveKey="#home" >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Data</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                        <Form className="nav-form" id="nav-form">
                            <Button>Get the APP</Button>
                            <Button>Login</Button>
                        </Form>
                    </Navbar.Collapse>
                    </Navbar>
            </div>
        )
    }
}

export default Header