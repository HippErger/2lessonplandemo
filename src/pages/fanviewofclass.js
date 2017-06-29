import React, {Component} from 'react';
import Header from '../components/header';
import PropTypes from 'prop-types';

class fanViewOfClasses extends Component {
  render() {
    console.log('from fanViewOfClass, 6', this.props.lessonplans);
    return (
      <div>
        <Header />
        <h6>this is the fanviewof a class</h6>
      </div>
    );
  }
}


fanViewOfClasses.propTypes = {
  lessonplans: PropTypes.array.isRequired,

};

export default fanViewOfClasses;
