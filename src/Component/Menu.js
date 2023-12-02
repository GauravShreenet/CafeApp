import React from 'react'
import firstLogo from '../Asset/Logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg='dark' data-bs-theme="dark" className='fixed-top'>
      <Container className=''>
        <Navbar.Brand href="" style={{width: '20vh'}}><Image src={firstLogo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Link to="" className='text-light nav-link'>Home</Link>
            <Link to="" className='text-light nav-link'>Menus</Link>
            <Link to="" className='text-light nav-link'>Our Story</Link>
            <Link to="" className='text-light nav-link'>Find Us</Link>
            <Link to="" className='text-light nav-link'>Special Events</Link>
            <Button variant='light' className='rounded-5 px-4'>
                Order
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
