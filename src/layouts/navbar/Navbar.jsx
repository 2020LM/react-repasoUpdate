import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'


export const ColorSchemesExample = (props) => {
    return (
    <nav className={`${props.classStyle} navStyles`}>
        <Navbar bg="dark" data-bs-theme="dark" className='span'>
          <Container className="navDistritution">
            <div>
              <Link to = "/">
                <Navbar.Brand href="/"> Hooks web </Navbar.Brand>
              </Link>
            </div>
            <div>
              <Nav className="me-auto">
                <Link to="/">
                  <Nav.Link href="/" class="nav-link">Home</Nav.Link>
                </Link>
                <Link to="/UseState">
                  <Nav.Link href="/UseState" class="nav-link">UseState</Nav.Link>
                </Link>
                <Link to="/UseEffect">
                  <Nav.Link href="/UseEffect" class="nav-link">UseEffect</Nav.Link>
                </Link>
                <Link to="/UseMemo">
                  <Nav.Link href="/UseMemo" class="nav-link">UseMemo</Nav.Link>
                </Link>
                <Link to="/UseRef">
                  <Nav.Link href="/UseRef" class="nav-link">UseRef</Nav.Link>
                </Link>
                <Link to="/UseContext">
                  <Nav.Link href="/UseContext" class="nav-link">UseContext</Nav.Link>
                </Link>
                <Link to="/UseCallBack">
                  <Nav.Link href="/UseCallBack" class="nav-link">UseCallBack</Nav.Link>
                </Link>
              </Nav>
            </div>
          </Container>
        </Navbar>
        </nav>
    );
  }


  