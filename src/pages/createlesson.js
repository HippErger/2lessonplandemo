import React, {Component} from 'react';
import Header from '../components/header';
import Link from 'next/link';
import LessonForm from '../components/lessonform';

class createLesson extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Create a lesson here</h3>
        <LessonForm />
        <Link href="/mylessonview">
          <button >
            Take Me to My Lessons
          </button>
        </Link>
        &nbsp; &nbsp;
      </div>
    );
  }
}

export default createLesson;
