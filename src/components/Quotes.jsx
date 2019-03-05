import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string } from 'prop-types';
import { bindActionCreators } from 'redux';
import Quote from './Quote';
import { deleteQuote, makeQuoteOfTheDay, getQuotesAsync, deleteQuoteAsync } from '../state/actionCreators';


export class Quotes extends React.Component {
  componentDidMount() {
    this.props.getQuotesAsync();
  }

  render() {
    return (
      <div>
        <h3>My Favorite Quotes</h3>
        <div>
          {
            this.props.quotes.map(quote => (
              <Quote
                key={quote.id}
                quote={quote}
                deleteQuote={this.props.deleteQuote}
                deleteQuoteAsync={this.props.deleteQuoteAsync}
                makeQuoteOfTheDay={this.props.makeQuoteOfTheDay}
                isQuoteOfTheDay={this.props.quoteOfTheDay === quote.id}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Quotes.propTypes = {
  quotes: arrayOf(shape({
    id: string.isRequired,
    author: string.isRequired,
    text: string.isRequired,
  })).isRequired,
  quoteOfTheDay: string,
};

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
    quoteOfTheDay: state.quoteOfTheDay,
    spinner: state.spinner,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteQuote,
    makeQuoteOfTheDay,
    getQuotesAsync,
    deleteQuoteAsync,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
