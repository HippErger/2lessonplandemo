import mongoose from 'mongoose';

const LessonModel = mongoose.Schema({
  // Who taught or created the lesson
  creator: {
    type: String,
    maxlength: [ 30, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  // a brief name to help teachers remember the lesson and later discuss it.
  title: {
    type: String,
    maxlength: [ 100, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  // the class the teacher would use the lessson in
  subject: {
    type: String,
    maxlength: [ 50, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  // In TX these are the esential knowledge and skill required by law for the Teacher
  // to teach and assess
  teks: {
    type: String,
    maxlength: [ 500, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  // This should be broken down into a structure for optional inputs but should include
  // all materials the teacher and class will need.
  materialsRequired: {
    type: String,
    maxlength: [ 1000, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  // quickly describe what the lesson covers and any notes, tips or hints that
  // are useful
  summary: {
    type: String,
    maxlength: [ 2000, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
  // how long with it take to complete this lesson?
  timeEstimate: {
    type: String,
    maxlength: [ 20, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
  // learning goal: What will students learn through this lesson?
  learningGoal: {
    type: String,
    maxlength: [ 2000, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
  // the opener of the lesson, what gets the students attention?
  hook: {
    type: String,
    maxlength: [ 2000, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
  // Later break this down into sequences maybe 1-6 sections, 4-6 optional
  // Sequence: Describe what will happen during each part of the lesson.
  instruction: {
    type: String,
    maxlength: [ 5000, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  // Differentiation strategies: How will you support students who need extra help
  differentiation: {
    type: String,
    maxlength: [ 250, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  // Assessment: how will you know what students have learned?
  assessment: {
    type: String,
    maxlength: [ 500, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
});

export default mongoose.model('Lessonplan', LessonModel);

/*

Copy of datastructure,
need to figure out how to build the structure so that each member has its own file

creator
title
subject
teks
materialsRequired
summary
timeEstimate
learningGoal
hook
instruction
differentiation
assessment

To use in Postman

"creator" : "something",
"title" : "something",
"subject" : "something",
"teks" : "something",
"materialsRequired" : "something",
"summary" : "something",
"timeEstimate" : "something",
"learningGoal" : "something",
"hook" : "something",
"instruction" : "something",
"differentiation" : "something",
"assessment" : "something"
*/
