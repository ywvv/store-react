import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
  return (
    <Navbar bg='black' variant='dark' expand='lg' collapseOnSelect>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to='/' href='/' end>
            <i className='bi bi-box-seam me-1 text-3xl' />
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to='/store' href='/store'>
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to='/about' href='/about'>
            About us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
