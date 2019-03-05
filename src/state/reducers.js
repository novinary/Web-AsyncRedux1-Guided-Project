// import dummyQuotes from '../constants/dummyQuotes';
import * as types from './actionTypes';


export function quotes(slice = [], action) {
  switch (action.type) {
    case types.ADD_QUOTES:
      // implement case
      return slice;
    case types.ADD_QUOTE:
      return slice.concat(action.payload);
    case types.DELETE_QUOTE:
      return slice.filter(quote => quote.id !== action.payload);
    default:
      return slice;
  }
}

export function quoteOfTheDay(slice = null, action) {
  switch (action.type) {
    case types.MAKE_QUOTE_OF_THE_DAY:
      return action.payload;
    case types.DELETE_QUOTE:
      return slice === action.payload ? null : slice;
    default:
      return slice;
  }
}

export function spinner(slice = false, action) {
  // implement
  return slice;
}
