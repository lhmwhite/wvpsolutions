import { LANGUAGE } from '../typeDefs'

const INITIAL_STATE = {
  language: 'english',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LANGUAGE:
      return { ...state, language: action.payload }

    default:
      return { ...state }
  }
}
