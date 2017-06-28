import React from 'react';
import Link from 'next/link';

function IndexPage() {
  return (
    <div>
      <h1>
        Hello World
      </h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      &nbsp; &nbsp;
      <Link href={{pathname: '/profile', query: {_id: '59526f7b403e1551a0c6f73c'} }}>
        <a>Sign-In</a>
      </Link>
    </div>
  );
}

export default IndexPage;
