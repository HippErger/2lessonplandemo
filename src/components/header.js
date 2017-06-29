import React, {Component} from 'react';
import Link from 'next/link';
import {StyleSheet, css} from 'aphrodite';

class Header extends Component {
  render() {
    const styles = StyleSheet.create({
      root: {
        width: 80,
        height: 60,
        background: 'white',
        ':hover': {
          background: 'black'
        }
      },

      title: {
        marginLeft: 5,
        color: 'black',
        fontSize: 22,
        ':hover': {
          color: 'white'
        }
      },
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

    return (
        <div className={css(styles.buttonContainer)}>
          <Link href="/profile">
            <img className={css(styles.avatarCircle)}
              src={'../static/images/flaviusheadshot.png'}/>
          </Link>
          &nbsp; &nbsp;
          <Link href={{pathname: '/mylessons', query: {_id: 'aaa'}}}>
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

export default Header;
