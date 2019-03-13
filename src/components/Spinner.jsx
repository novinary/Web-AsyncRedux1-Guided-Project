import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledSpinner = styled.div`
/* implement so spinner and children DISPLAY when they should */
.spinner {
  display: ${props => (props.spinnerOn ? "block" : "none")};

  .children {
    display: ${props => {props.spinnerOn ? "none" : "block"}};
  } 
`;

// connect this component to the store, to get the "spinner" slice of state
export class Spinner extends React.Component {
  render() {
    return (
      <StyledSpinner spiinerOn={this.props.spinner}>
        <div className='spinner'>Please Wait...</div>
        <div className='children'>{this.props.children}</div>
      </StyledSpinner>
    );
  }
}

Spinner.propTypes = {
  spinner: bool,
};

const mapStateToProps = function (state) {
  return { spinner: state.spinner };
};

// default export the connected version!
export default connect(mapStateToProps)(Spinner);g
