import React from 'react'
import Fade from 'react-reveal/Fade'
import { connect } from 'react-redux'

import ChangeLanguage from './ChangeLanguage'
import { _onLanguageChange } from '../actions'
import { testESP, testEng } from '../data'

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
