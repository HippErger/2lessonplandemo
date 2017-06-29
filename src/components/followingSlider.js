import React, {Component} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';
import {
  loadMultipleProfiles
} from '../actions';

class followingSlider extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    // brings all items in then filters out profiles by the id, need to
    // bring this id into the component to use it dynamically.
    const allProfiles = this.props.items;
    const followedProfiles = allProfiles.filter( followed => {
      return followed._id !== '59526f7b403e1551a0c6f73c';
    });
    const titleStyle = {
      border: '1px solid black',
    };

    console.log('from followingSlider, 23', followedProfiles);

      // {{pathname: '/fanviewofclass',
      // query: {_id: this.props.idOfUser}}}
    function instanceOfProfiles() {
      if (!followedProfiles) {
        return (
          <h6>loading...</h6>
        );
      } return (
        followedProfiles.map((instance, index) => {
          return (
            <Link key={index}
            href='/fanviewofprofile'
              lessonplans={instance.lessonplans}>
              <div style={titleStyle} >
                <h6>{instance.username}</h6>
              </div>
            </Link>
          );
        })
      );
    }
    // {instanceOfProfiles()}

    return (
      <div>
        <h6>Check-out who you&apos;re following:</h6>
        {instanceOfProfiles()}
      </div>
    );
  }
}

followingSlider.propTypes = {
  idOfUser: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  getProfiles: PropTypes.func.isRequired,

};
/* eslint-disable no-unused-vars */
function mapStateToProps(state) {
  return {
    items: state.multipleProfilesReducer.items,
    loading: state.multipleProfilesReducer.loading,
    error: state.multipleProfilesReducer.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProfiles: () => {
      dispatch(loadMultipleProfiles());
    }
  };

}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(followingSlider);



// import {initStore} from '../store';
// import withRedux from 'next-redux-wrapper';
// import PropTypes from 'prop-types';
//


// someComponent.propTypes = {
//   firstKey: PropTypes.func.isRequired,
//   secondKey: PropTypes.object.isRequired,
//
// };

// function mapStateToProps(state) {
//   return {
//     firstKey: state.someReducer.firstKey,
//   }
// }
//
// /* eslint-disable no-unused-vars */
// function mapDispatchToProps(dispatch) {
  // return {
    //   firstKey: () => {
    //     console.log('mapDispatch is working');
    //   };
  // }

// }
//

//
// export default withRedux(initStore, null, null)(someComponent);
