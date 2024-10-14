import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
            Cybrom Pvt Ltd
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/insert" className="nav-link-custom">
                Insert
              </Nav.Link>
              <Nav.Link as={Link} to="/display" className="nav-link-custom">
                Display
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
        .custom-navbar {
          padding: 1rem;
          font-size: 1.2rem;
          font-weight: bold;
          background: linear-gradient(90deg, rgba(33, 150, 243, 1) 0%, rgba(0, 123, 255, 1) 100%);
        }

        .navbar-brand-custom {
          font-family: 'Arial', sans-serif;
          font-size: 1.6rem;
          color: #fff !important;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .navbar-brand-custom:hover {
          color: #ddd !important;
        }

        .nav-link-custom {
          color: white !important;
          margin-left: 20px;
          transition: color 0.3s ease;
        }

        .nav-link-custom:hover {
          color: #ffc107 !important;
        }

        .nav-link-custom.active {
          color: #ffc107 !important;
        }

        @media screen and (max-width: 768px) {
          .custom-navbar {
            font-size: 1rem;
          }

          .navbar-brand-custom {
            font-size: 1.3rem;
          }

          .nav-link-custom {
            margin-left: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
