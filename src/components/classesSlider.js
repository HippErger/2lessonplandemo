import React, {Component} from 'react';
// import Link from 'next/link';

class classesSlider extends Component {

  componentDidMount() {
    // am getting the user's id but it would be better to pass just the clases to this component
    console.log('from classesSlider, 7', this.props);
  }

  render() {
    return (
      <div>
        <h6>This is where the classesSlider will go</h6>
      </div>
    );
  }
}

export default classesSlider;


// import {initStore} from '../store';
// import withRedux from 'next-redux-wrapper';
// import PropTypes from 'prop-types';
//
// function mapStateToProps(state) {
//   return {
//     firstKey: state.someReducer.firstKey,
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   firstKey: () => {
//     console.log('mapDispatch is working');
//   };
// }
//
// someComponent.propTypes = {
//   firstKey: PropTypes.func.isRequired,
//   secondKey: PropTypes.object.isRequired,
//
// };
//
// export default withRedux(initStore, null, null)(someComponent);
