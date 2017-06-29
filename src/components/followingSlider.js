import React, {Component} from 'react';
// import Link from 'next/link';
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
    console.log('from followingSlider, 16', this.props.error);
    // const followedProfiles = this.props.;
    // const titleStyle = {
    //   border: '1px solid black',
    // };

// {{pathname: '/fanviewofclass',
  // query: {_id: this.props.idOfUser}}}
    // function instanceOfClasses() {
    //   if (!ALL_CLASSES) {
    //     return (
    //       <h6>loading...</h6>
    //     );
    //   } return (
    //     ALL_CLASSES.map((instance, index) => {
    //       return (
    //         <Link key={index}
    //         href='/fanviewofclass'
    //           lessonplans={instance.lessonplans}>
    //           <div style={titleStyle} >
    //             <h6>{instance.title}</h6>
    //           </div>
    //         </Link>
    //       );
    //     })
    //   );
    // }
    // {instanceOfClasses()}

    return (
      <div>
        <h6>This is the followingSlider </h6>
      </div>
    );
  }
}

followingSlider.propTypes = {
  idOfUser: PropTypes.string.isRequired,
  // classes: PropTypes.array.isRequired,
  getProfiles: PropTypes.func.isRequired,

};
/* eslint-disable no-unused-vars */
function mapStateToProps(state) {
  return {
    items: state.multipleProfilesReducer.item,
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
