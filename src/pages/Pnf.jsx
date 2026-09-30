import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Pnf() {
  return (
    <>
      <Header />
      <main className="not-found-page">
        <div className="not-found-content">
          <span className="not-found-code">404</span>
          <p className="page-eyebrow">Page not found</p>
          <h1>We couldn’t find that page.</h1>
          <p className="not-found-copy">The link may be outdated, or the page may have moved.</p>
          <Link to="/" className="btn btn-primary not-found-link">
            <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
            Back to shopping
          </Link>
        </div>
      </main>
    </>
  )
}

export default Pnf