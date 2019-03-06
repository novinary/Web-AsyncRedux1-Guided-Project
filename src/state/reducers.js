import * as types from './actionTypes';


export function quotes(quotesArray = [], action) {
  switch (action.type) {
    case types.ADD_QUOTES:
      // implement case
      return quotesArray;
    case types.ADD_QUOTE:
      return quotesArray.concat(action.payload);
    case types.DELETE_QUOTE:
      return quotesArray.filter(quote => quote.id !== action.payload);
    default:
      return quotesArray;
  }
}

export function quoteOfTheDay(quoteId = null, action) {
  switch (action.type) {
    case types.MAKE_QUOTE_OF_THE_DAY:
      return action.payload;
    case types.DELETE_QUOTE:
      return quoteId === action.payload ? null : quoteId;
    default:
      return quoteId;
  }
}

export function spinner(isOn = false, action) {
  // implement
  return isOn;
}
