import dummyQuotes from '../constants/dummyQuotes';
import * as types from './actionTypes';


export function quotes(state = dummyQuotes, action) {
  switch (action.type) {
    case types.ADD_QUOTE:
      return state.concat(action.payload);
    case types.DELETE_QUOTE:
      return state.filter(quote => quote.id !== action.payload);
    default:
      return state;
  }
}

export function quoteOfTheDay(state = null, action) {
  switch (action.type) {
    case types.MAKE_QUOTE_OF_THE_DAY:
      return action.payload;
    case types.DELETE_QUOTE:
      return state === action.payload ? null : state;
    default:
      return state;
  }
}
