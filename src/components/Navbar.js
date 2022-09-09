import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
    
      <nav className="navbar">
              <div>
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/Donations">Donations</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/Donors">Donors</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/Campaigns">Campaigns</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/Contacts">Contact Us</Link>
                      </li>
                  </ul>
              </div>
          </nav>
        )
  }
  
  export default Navbar