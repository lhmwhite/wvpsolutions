import React from 'react'
import Fade from 'react-reveal/Fade'
import Iframe from 'react-iframe'
import { _onLanguageChange } from '../actions'
import { testESP, testEng } from '../data'

const DashboardPage = () => (
  <div>
    <div className="row">
      <div className="col-1" />
      <div className="col-8">
        <Fade duration={1000}>
          <div className="pallet pallet-2">
            <h2>Subtitle Bree Serif</h2>
            <p>This is Raleway</p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo. <span>Quisque sit amet</span> est et sapien ullamcorper
              pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
              Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis
              tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate
              magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
              porttitor, facilisis luctus, metus
            </p>

            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </div>
        </Fade>
      </div>
      <div className="col-1" />
    </div>
    <div className="row">
      <div className="col-1" />
      <div className="col-8">
        <Fade duration={1000}>
          <div className="pallet pallet-2">
            <h2>{testEng.testTitle}</h2>
          </div>
          <div className="button">SWITCH</div>
        </Fade>
      </div>
      <div className="col-1" />
    </div>
  </div>
)

export default DashboardPage
