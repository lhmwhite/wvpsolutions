import { LANGUAGE } from '../typeDefs'

const INITIAL_STATE = {
  language: 'english',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LANGUAGE:
      const switchLang = arg => {
        let langSelect = ''
        arg === 'english' ? (langSelect = 'español') : (langSelect = 'english')
        return langSelect
      }
      switchLang(action.payload)

      return { ...state, language: switchLang(action.payload) }

    default:
      return { ...state }
  }
}
