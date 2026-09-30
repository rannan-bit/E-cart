import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import Badge from 'react-bootstrap/Badge'
import { searchProduct } from '../redux/slice/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




function Header(insidelanding) {
  const dispatch=useDispatch()
  const wishlist=useSelector(state=>state.Wishlist)
  const cart=useSelector(state=>state.cart)
  return (
    <div>
      <Navbar expand="lg" className="storefront-nav shadow-sm">
        <Container fluid className="px-3 px-lg-5">

          {/* Logo + Brand */}
          <Link to={'/'} className="store-brand d-flex align-items-center text-decoration-none">
            <img
              src={logo}
              alt="Shopify"
              width="45"
              height="45"
              className="me-2"
            />
            <span className="store-brand-name">Shopify</span>
          </Link>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">

            {/* Search */}
            {insidelanding && (
              <div className="store-search mx-lg-5 my-3 my-lg-0 flex-grow-1">
                <input
                  onChange={(e)=>dispatch(searchProduct(e.target.value))}
                  className="form-control"
                  type="search"
                  placeholder="Search by product name"
                  aria-label="Search products"
                />
              </div>
            )}

            {/* Wishlist + Cart */}
            <div className="store-actions d-flex align-items-center">

              {/* Wishlist */}
              <div className="position-relative">
                <Link to={`/wishlist`} className="store-action" aria-label={`Wishlist, ${wishlist?.length || 0} items`}>
                <i className="fa-solid fa-heart text-danger fs-4"></i>
                <span className="d-none d-sm-inline">Wishlist</span>

                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {wishlist?.length}
                </Badge></Link>
                
              </div>

              {/* Cart */}
              <div className="position-relative">
                <Link to={`/cart`} className="store-action" aria-label={`Cart, ${cart?.length || 0} items`}>
                <i className="fa-solid fa-cart-shopping text-success fs-4"></i>
                <span className="d-none d-sm-inline">Cart</span>

                <Badge
                  bg="success"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {cart?.length}
                </Badge>
                </Link>
              </div>

            </div>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header