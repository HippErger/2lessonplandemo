import React, {Component} from 'react';
import Header from '../components/header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import PropTypes from 'prop-types';

class myProfile extends Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    return (
      <div>
      <Header />
      <h6>This is my profile page</h6>
      </div>
    );
  }
}

myProfile.propTypes = {
  getProfile: PropTypes.func.isRequired,

};


/* eslint-disable no-unused-vars */
function mapDispatchToProps(dispatch) {
  return {
    getProfile: () => {
      console.log('myProfile is loading, 21');
    }
  };
}

// export default myProfile;
export default withRedux(initStore, null, mapDispatchToProps)(myProfile);

// if you get this error: this.props.getProfile is not a function - its because
// mapDispatchToProps is not being passed to withRedux
