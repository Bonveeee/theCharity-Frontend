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
                          <Link className="nav-link" to="/ArtWorks">Donations</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/Artists">Donors</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/About">Campaigns</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/Helpdesk">Organizations</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/Helpdesk">Reviews</Link>
                      </li>
                  </ul>
              </div>
          </nav>
        )
  }
  
  export default Navbar