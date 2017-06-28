import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div>
      <Link href="/profile">
        <button>Avatar</button>
      </Link>
      &nbsp; &nbsp;
      <Link href={{pathname: '/mylessons', query: {_id: 'aaa'}}}>
        <button>My Lessons</button>
      </Link>
      &nbsp; &nbsp;
      <Link href={{pathname: '/createlesson', query: {_id: 'aaa'}}}>
        <button>New Lesson</button>
      </Link>
      &nbsp; &nbsp;
      <Link href="/">
        <button>Sign Out</button>
      </Link>
    </div>
  );
}

export default Header;
