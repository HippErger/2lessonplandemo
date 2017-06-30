import React, {Component} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {initStore} from '../store';
import withRedux from 'next-redux-wrapper';
import {StyleSheet, css} from 'aphrodite';
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
      return followed._id !== this.props.selfId;
    });
    const titleStyle = {
      border: '1px solid black',
    };

      // {{pathname: '/fanviewofclass',
      // query: {_id: this.props.idOfUser}}}
    function instanceOfProfiles() {
      const followStyles = StyleSheet.create({
        avatarCircle: {
          borderRadius: 50,
          height: 95,
          width: 95,
          marginTop: 10,
          marginBottom: 'auto',
          marginLeft: 5,
          display: 'inline-block',
        },
      });
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
              <div style={titleStyle} className='followinTile'>
                <img className={css(followStyles.avatarCircle)} src={instance.avatar}/>
                <h3>{instance.username}</h3>
                <h6>years teaching: {instance.years}</h6>
                <h6>number of followers: {instance.followers}</h6>
                <h6>following: {instance.following}</h6>
                <ul>
                  <b>Subjects</b>
                  <li>{instance.subjects[0].title}</li>
                  <li>{instance.subjects[1].title}</li>
                </ul>
                <style jsx>{`
                 .followinTile {
                   font: 15px Helvetica, Arial, sans-serif;
                   background: #eee;
                   padding: 60px;
                   text-align: center;
                   transition: 100ms ease-in background;
                   width: 9%;
                 }
                 .followinTile:hover {
                   background: #ccc;
                 }`}
                </style>
              </div>
            </Link>
          );
        })
      );
    }
    // {instanceOfProfiles()}
    const flexStyle = {
      'display': 'flex',
      'flex-direction': 'row',
      'justify-content': 'space-around'
    };

    return (
      <div>
        <h4>Check-out who you&apos;re following:</h4>
        <div style={flexStyle} >
          {instanceOfProfiles()}
        </div>
      </div>
    );
  }
}

followingSlider.propTypes = {
  idOfUser: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  getProfiles: PropTypes.func.isRequired,
  selfId: PropTypes.string.isRequired,

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
