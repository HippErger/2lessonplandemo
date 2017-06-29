import React, {Component} from 'react';
// import Link from 'next/link';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import {
  loadProfileForLesson
} from '../actions';

class classesSlider extends Component {
  PROFILE_ID = this.props.idOfUser;
  componentDidMount() {
    this.props.getClasses(this.PROFILE_ID);
  }

  render() {

    // const PROFILE_ID = this.props.idOfUser;
    // console.log('from classes classesSliderjs, 17', PROFILE_ID);
    const ALL_SUBJECTS = this.props.item.subjects;
    console.log('from classesSliderjs, 19', ALL_SUBJECTS);

    const instanceOfClasses = ALL_SUBJECTS.map((instance, index) => {
      console.log('from classesSliderjs, 24', instance.title);
      return (
        <div key={index}>
          <h6>{instance.title}</h6>
          <p>for each of these classes we need to display the lessonPlans</p>
        </div>
      );
    });


    return (
      <div>
        <h6>This is where my classesSlider will go</h6>
        {instanceOfClasses}
      </div>
    );
  }
}

classesSlider.propTypes = {
  idOfUser: PropTypes.string.isRequired,
  item: PropTypes.array.isRequired,
  getClasses: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
  return {
    item: state.profileReducer.item,
  };
}

/* eslint-disable no-unused-vars */
function mapDispatchToProps(dispatch) {
  return {
    getClasses: id => {
      console.log('mapDispatch in classesSliderjs, 51, is working', id);
      dispatch(loadProfileForLesson(id));
    }
  };

}


// export default classesSlider;
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(classesSlider);



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
