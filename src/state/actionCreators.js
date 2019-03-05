import uuid from 'uuid';
import * as types from './actionTypes';


export const getQuotesAsync = () => dispatch => {
  dispatch({ type: types.SPINNER_ON });
  fetch('http://gabe.mockable.io/quotes')
    .then(res => res.json())
    .then(quotes => {
      dispatch({ type: types.GET_QUOTES, payload: quotes });
      dispatch({ type: types.SPINNER_OFF });
    });
};

export function deleteQuote(id) {
  return {
    type: types.DELETE_QUOTE,
    payload: id,
  };
}

export function makeQuoteOfTheDay(id) {
  return {
    type: types.MAKE_QUOTE_OF_THE_DAY,
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
