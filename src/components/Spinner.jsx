import React from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';
import styled from 'styled-components';


const StyledSpinner = styled.div`
  .spinner {
    display: ${pr => (pr.spinner ? 'block' : 'none')};
  }
  .children {
    display: ${pr => (pr.spinner ? 'none' : 'block')};
  }
`;

export class Spinner extends React.Component {
  render() {
    return (
      <StyledSpinner spinner={this.props.spinner}>
        <div className='spinner'>Please Wait...</div>
        <div className='children'>{this.props.children}</div>
      </StyledSpinner>
    );
  }
}

Spinner.propTypes = {
  spinner: bool,
};

export default connect(st => ({ spinner: st.spinner }))(Spinner);
