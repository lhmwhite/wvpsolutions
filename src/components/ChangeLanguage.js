import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { _onLanguageChange } from '../actions'

class ChangeLanguage extends React.Component {
  render() {
    const { _onLanguageChange, language } = this.props

    return (
      <div className="button" onClick={() => _onLanguageChange(language)}>
        Lang
      </div>
    )
  }
}

const mapStateToProps = state => ({ language: state.language.language })

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      _onLanguageChange,
    },
    dispatch,
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage)
