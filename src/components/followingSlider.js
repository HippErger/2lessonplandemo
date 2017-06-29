import React, {Component} from 'react';
// import Link from 'next/link';
import PropTypes from 'prop-types';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';

class followingSlider extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
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
  classes: PropTypes.array.isRequired,
  getProfiles: PropTypes.func.isRequired,

};
//
// function mapStateToProps(state) {
//   return {
//     item: state.profileReducer.item,
//   };
// }

/* eslint-disable no-unused-vars */
function mapDispatchToProps(dispatch) {
  return {
    getProfiles: () => {
      console.log('mapDispatch in followingSlider, 63, is working');
      // dispatch(loadProfileForLesson(id));
    }
  };

}

// export default followingSlider;
export default withRedux(initStore, null, mapDispatchToProps)(followingSlider);



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
