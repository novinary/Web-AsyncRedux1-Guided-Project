import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';


const StyledSpinner = styled.div`
  /* implement so spinner DISPLAYs only when it needs to */
`;

// connect this component to the store, to get the "spinner" slice of state
export default class Spinner extends React.Component {
  render() {
    return (
      <StyledSpinner>
        <div className='spinner'>Please Wait...</div>
        <div className='children'>{this.props.children}</div>
      </StyledSpinner>
    );
  }
}

Spinner.propTypes = {
  spinner: bool,
};

// default export the connected version!
