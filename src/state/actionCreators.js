import uuid from 'uuid';
import * as types from './actionTypes';


export const deleteQuoteAsync = id => dispatch => {
// implement
};

export const getQuotesAsync = () => dispatch => {
// implement
// dispatch takes an object with a type so SPINNER_ON
};

export const addQuoteAsync = quote => dispatch => {
// implement
};

export function deleteQuote(id) {
  return {
    type: types.DELETE_QUOTE,
    payload: id,
  };
}

export function addQuote(author, text) {
  return {
    type: types.ADD_QUOTE,
    payload: {
      id: uuid(),
      author,
      text,
    },
  };
}

export function makeQuoteOfTheDay(id) {
  return {
    type: types.MAKE_QUOTE_OF_THE_DAY,
    payload: id,
  };
}
