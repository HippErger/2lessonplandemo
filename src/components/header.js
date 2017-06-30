import React, {Component} from 'react';
import Link from 'next/link';
import {StyleSheet, css} from 'aphrodite';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('from header component. 7', this.props.userImage);
    const styles = StyleSheet.create({
      // #362B68 Purple
      buttonContainer: {
        background: '#7EBFC1',
        border: '4px solid #89878C',
        marginTop: 0,
        paddingTop: 'auto',
        paddingBottom: 5,
        paddingLeft: 10,
        height: 75,
      },

      avatarCircle: {
        borderRadius: 50,
        height: 50,
        width: 50,
        marginTop: 10,
        marginBottom: 'auto',
        marginLeft: 5,
        display: 'inline-block',
      },

      button: {
        borderRadius: 5,
        background: '#4CAF50', /* Green */
        border: '1px solid black',
        color: 'white',
        padding: '7px 28px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16',
      }
    });
    //  '../static/images/flaviusheadshot.png'
    return (
        <div className={css(styles.buttonContainer)}>
          <Link href="/profile">
            <img className={css(styles.avatarCircle)}
              src={this.props.userImage}/>
          </Link>
          &nbsp; &nbsp;
          <Link href={{pathname: '/mylessonview', query: {_id: 'aaa'}}}>
            <button className={css(styles.button)}>My Lessons</button>
          </Link>
          &nbsp; &nbsp;
          <Link href={{pathname: '/createlesson', query: {_id: 'aaa'}}}>
            <button className={css(styles.button)}>Create New Lesson</button>
          </Link>
          &nbsp; &nbsp;
          <Link href="/">
            <button className={css(styles.button)}>Sign Out</button>
          </Link>
        </div>
    );
  }
}

Header.propTypes = {
  userImage: PropTypes.string.isRequired,
};

export default Header;
