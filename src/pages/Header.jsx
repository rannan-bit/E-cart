import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import Badge from 'react-bootstrap/Badge'


function Header(insidelanding) {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
        <Container fluid className="px-3 px-lg-5">

          {/* Logo + Brand */}
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Shopify"
              width="45"
              height="45"
              className="me-2"
            />
            <span className="fw-bold fs-4">Shopify</span>
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">

            {/* Search */}
            {insidelanding && (
              <div className="mx-lg-5 my-3 my-lg-0 flex-grow-1">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search by product name"
                />
              </div>
            )}

            {/* Wishlist + Cart */}
            <div className="d-flex align-items-center gap-4">

              {/* Wishlist */}
              <div className="position-relative">
                <i className="fa-solid fa-heart text-danger fs-4"></i>

                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  0
                </Badge>
              </div>

              {/* Cart */}
              <div className="position-relative">
                <i className="fa-solid fa-cart-shopping text-success fs-4"></i>

                <Badge
                  bg="success"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  0
                </Badge>
              </div>

            </div>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header