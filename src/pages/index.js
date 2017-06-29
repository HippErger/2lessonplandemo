import React from 'react';
import Link from 'next/link';
import {StyleSheet, css} from 'aphrodite';

function IndexPage() {

  const indexStyles = StyleSheet.create({
    root: {
      width: 150,
      height: 200,
      margin: 'auto',
      textAlign: 'center',
      background: '#89878C',
      borderRadius: 150,
      paddingTop: 40,
      ':hover': {
        background: '#4CAF50',
        border: '1px solid black',

      }
    },

    title: {
      margin: 'auto',
      paddingTop: 20,
      color: 'black',
      fontSize: 32,
      ':hover': {
        color: 'white'
      }
    },

    linkFont: {
      margin: 'auto',
      marginRight: 12,
      ':hover': {
        color: 'white'
      }
    }
  });

  return (
    <div className={css(indexStyles.root)}>
      <Link href="/about">
        <h1 className={css(indexStyles.title)}>
          Schmek!
        </h1>
      </Link>
      &nbsp; &nbsp;
      <Link href={{pathname: '/profile', query: {_id: '59526f7b403e1551a0c6f73c'} }}>
        <a className={css(indexStyles.linkFont)}>Sign-In</a>
      </Link>
    </div>
  );
}

export default IndexPage;
