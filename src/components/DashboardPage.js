import React from 'react'
import Fade from 'react-reveal/Fade'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faPrescriptionBottleAlt,
  faBuilding,
  faHardHat,
  faBaby,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import ChangeLanguage from './ChangeLanguage'
import { _onLanguageChange } from '../actions'
import { testESP, testEng } from '../data'

const navItem = (to, icon, text) => (
  <NavLink to={to} activeClassName={false} className="nav-item">
    <FontAwesomeIcon icon={icon} className="nav-icon" />
    <p>{text}</p>
  </NavLink>
)

const DashboardPage = props => {
  const { language } = props
  const langData = language === 'english' ? testEng : testESP

  return (
    <div>
      <div className="row">
        <div className="col-1" />
        <div className="col-8">
          <Fade duration={1000}>
            <div className="pallet pallet-2">
              <h2>One size does not fit all.</h2>
              <p>
                WVP Solutions focuses on small business and individual benefits including
                disability, health insurance, life insurance and supplemental coverage.
              </p>
              <p>
                Find the solutions that work for your situation, whether it includes ACA individual
                options, group benefits, healthshares or Medicare.
              </p>

              <p>Contact us to discuss how we can help you.</p>

              <div className="row" style={{ margin: '0 auto 20px auto', width: '75%' }}>
                {navItem('/', faPrescriptionBottleAlt, 'Medicare')}
                {navItem('/create', faBuilding, 'Business')}
                {navItem('/create', faHardHat, 'Supplemental Benefits')}
              </div>
              <div className="row">
                {navItem('/create', faBaby, 'Individual & Family')}
                {navItem('/create', faHeart, 'Family Protection & Retirement')}
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-1" />
      </div>
      <div className="row">
        <div className="col-1" />
        <div className="col-8">
          <Fade duration={1000} key={langData.testTitle}>
            <div className="pallet pallet-2">
              <h2>{langData.testTitle}</h2>
              <p>{langData.body}</p>
              <ChangeLanguage />
            </div>
          </Fade>
        </div>
        <div className="col-1" />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ language: state.language.language })

export default connect(mapStateToProps)(DashboardPage)
