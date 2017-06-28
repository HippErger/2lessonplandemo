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
      <Link href="/profile">
        <a>Sign-In</a>
      </Link>
    </div>
  );
}

export default IndexPage;
