import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
<nav id="mainNav" className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container"><Link to="/" className="navbar-brand">Aayush Dutt</Link>
    <button type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right">Menu<i className="fa fa-bars" /></button>
    <div id="navbarResponsive" className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </div>
  </div>
</nav>


);

export default Header


