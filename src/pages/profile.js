import React, {Component} from 'react';
import Header from '../components/header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import PropTypes from 'prop-types';
import ClassesSlider from '../components/classesSlider';
import {
  loadProfile
} from '../actions';

class myProfile extends Component {
  PROFILE_ID = this.props.url.query._id;
  componentDidMount() {
    console.log('from myProfilejs, 10', this.props.item);
    this.props.getProfile(this.PROFILE_ID);
  }

  render() {
    return (
      <div>
      <Header />
      <h6>This is my profile page</h6>
      <div>
        <hr />
        <h6>This where the following slider will go</h6>
        <hr />
      </div>
      <div>
        <hr />
        <ClassesSlider idOfUser= {this.PROFILE_ID} classes= {this.props.item.subjects} />
        <hr />
      </div>
      </div>
    );
  }
}

myProfile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  url: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,

};

function mapStateToProps(state) {
  return {
    item: state.profileReducer.item,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProfile: id => {
      console.log('myProfile is loading, 21', id);
      dispatch(loadProfile(id));
    }
  };
}

// export default myProfile;
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(myProfile);

// if you get this error: this.props.getProfile is not a function - its because
// mapDispatchToProps is not being passed to withRedux
