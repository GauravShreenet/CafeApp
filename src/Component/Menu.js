import React from 'react'
import firstLogo from '../Asset/Logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';

export const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg='dark' data-bs-theme="dark" className='fixed-top'>
      <Container fluid className='mx-5'>
        <Navbar.Brand href=""><Image src={firstLogo} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link href="" className='text-light'>Home</Nav.Link>
            <Nav.Link href="" className='text-light'>Menus</Nav.Link>
            <Nav.Link href="" className='text-light'>Our Story</Nav.Link>
            <Nav.Link href="" className='text-light'>Find Us</Nav.Link>
            <Nav.Link href="" className='text-light'>Special Events</Nav.Link>
            <Button variant='light' className='rounded-5 px-4'>
                Order
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
