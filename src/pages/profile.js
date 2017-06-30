import React, {Component} from 'react';
import Header from '../components/header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import PropTypes from 'prop-types';
import ClassesSlider from '../components/classesSlider';
import FollowingSlider from '../components/followingSlider';
// import {StyleSheet, css} from 'aphrodite';
import {
  loadProfile
} from '../actions';


class myProfile extends Component {
  PROFILE_ID = this.props.url.query._id;
  // when clicking on the sign-in button it may not be passing the query and
  // cannot load the profile of the user.
  REAL_ID = '59526f7b403e1551a0c6f73c';
  componentDidMount() {
    console.log('from myProfilejs, 14', this.props.item);
    console.log('from myProfilejs, 21', this.PROFILE_ID);
    this.props.getProfile(this.PROFILE_ID);
  }

  render() {

    // const profileStyles = StyleSheet.create({
    //   shake: {
    //     animationName: {
    //       '25%': {
    //         transform: 'scale(1.05) rotate(4deg)'
    //       },
    //       '50%': {
    //         transform: 'scale(1.05) rotate(4deg)'
    //       }
    //     },
    //     animationDuration: '1s',
    //     animationIterationCount: '10s'
    //   }
    // });
    // className={css(profileStyles.shake)}


    return (
      <div>
        <Header userImage={this.props.item.avatar} />
        <h3 >Hello, {this.props.item.username}</h3>
        <div>
          <hr />
          <FollowingSlider selfId={this.PROFILE_ID}/>
          <hr />
        </div>
        <div>
          <ClassesSlider
            user= {this.props.item}
            idOfUser= {this.PROFILE_ID}
            classes= {this.props.item.subjects} />
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
      console.log('myProfile is loading, 80', id);
      dispatch(loadProfile(id));
    }
  };
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(myProfile);

// if you get this error: this.props.getProfile is not a function - its because
// mapDispatchToProps is not being passed to withRedux
