import React, {Component} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

class classesSlider extends Component {

  render() {
    const ALL_CLASSES = this.props.classes;
    const titleStyle = {
      border: '1px solid black',
    };

// {{pathname: '/fanviewofclass',
  // query: {_id: this.props.idOfUser}}}
    function instanceOfClasses() {
      if (!ALL_CLASSES) {
        return (
          <h6>loading...</h6>
        );
      } return (
        ALL_CLASSES.map((instance, index) => {
          return (
            <Link key={index}
            href='/fanviewofclass'
              lessonplans={instance.lessonplans}>
              <div style={titleStyle} >
                <h6>{instance.title}</h6>
              </div>
            </Link>
          );
        })
      );
    }

    return (
      <div>
        {instanceOfClasses()}
      </div>
    );
  }
}

classesSlider.propTypes = {
  idOfUser: PropTypes.string.isRequired,
  classes: PropTypes.array.isRequired,

};
//
// function mapStateToProps(state) {
//   return {
//     item: state.profileReducer.item,
//   };
// }

/* eslint-disable no-unused-vars */
// function mapDispatchToProps(dispatch) {
//   return {
//     getClasses: id => {
//       console.log('mapDispatch in classesSliderjs, 51, is working', id);
//       dispatch(loadProfileForLesson(id));
//     }
//   };
//
// }

export default classesSlider;
// export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(classesSlider);



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
