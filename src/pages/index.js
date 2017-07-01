import React from 'react';
import Link from 'next/link';
// import {StyleSheet, css} from 'aphrodite';
import '../static/stylesheets/indexstyles.css';

if (typeof window !== 'undefined') {
  /* StyleSheet.rehydrate takes an array of rendered classnames,
  and ensures that the client side render doesn't generate
  duplicate style definitions in the <style data-aphrodite> tag */
  StyleSheet.rehydrate(window.__NEXT_DATA__.ids);
}

function IndexPage() {

  // const indexStyles = StyleSheet.create({
  //   tabPane: {
  //     width: 150,
  //     height: 200,
  //     margin: 'auto',
  //     textAlign: 'center',
  //     background: '#89878C',
  //     borderRadius: 150,
  //     paddingTop: 40,
  //     ':hover': {
  //       background: '#4CAF50',
  //       border: '1px solid black',
  //
  //     }
  //   },
  //
  //   title: {
  //     margin: 'auto',
  //     paddingTop: 20,
  //     color: 'black',
  //     fontSize: 32,
  //     ':hover': {
  //       color: 'white'
  //     }
  //   },
  //
  //   linkFont: {
  //     margin: 'auto',
  //     marginRight: 12,
  //     ':hover': {
  //       color: 'white'
  //     }
  //   }
  // });
  // YonderWay 59526edd403e1551a0c6f70f
  // Flavius 59526f7b403e1551a0c6f73c
  // HippErger 59526e09403e1551a0c6f6cf
  // FlyingBacon 59526cc6403e1551a0c6f681
  return (
    <div className="indexStyles_tabPane">
      <Link href="/about">
        <h1 className="indexStyles_title">
          Schmek!
        </h1>
      </Link>
      &nbsp; &nbsp;
      <Link href={{pathname: '/profile', query: {_id: '59526cc6403e1551a0c6f681'} }}>
        <a className="indexStyles_linkFont">Sign-In</a>
      </Link>
    </div>
  );
}

export default IndexPage;
