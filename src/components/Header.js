import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faPrescriptionBottleAlt,
  faBuilding,
  faHardHat,
  faBaby,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'

const navItem = (to, icon, text) => (
  <NavLink to={to} activeClassName="active" className="nav-item">
    <FontAwesomeIcon icon={icon} className="nav-icon" />
    <p>{text}</p>
  </NavLink>
)

const Header = () => (
  <header>
    <div className="row">
      <div className="col-1">
        <div className="logo">
          <h1>
            <span>WVP</span>
            <span>Solutions</span>
          </h1>
        </div>
      </div>
      <div className="col-4">
        <div className="row">
          {navItem('/', faPrescriptionBottleAlt, 'Medicare')}
          {navItem('/create', faBuilding, 'Business')}
          {navItem('/create', faHardHat, 'Supplemental Benefits')}
          {navItem('/create', faBaby, 'Individual & Family')}
          {navItem('/create', faHeart, 'Family Protection & Retirement')}
        </div>
      </div>
    </div>
    {/* <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink> */}
  </header>
)

export default Header
