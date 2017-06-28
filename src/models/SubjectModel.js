import mongoose from 'mongoose';

const SubjectModel = mongoose.Schema({
  // Who teaches it
  username: {
    type: String,
    maxlength: [ 30, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  // Should be an input with predetermined choices to match typing
  title: {
    type: String,
    maxlength: [ 100, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  gradeLevel: {
    type: String,
    maxlength: [ 100, 'Maximum character limit reached. Please try again.' ],
    required: false
  },
  // quickly describe what the Subject covers and any notes, tips or hints that
  // are useful
  summary: {
    type: String,
    maxlength: [ 2000, 'Maximum character limit reached. Please try again.' ],
    required: true
  },
});

export default mongoose.model('Subjectplan', SubjectModel);

/*
{
 "username" : "yonderWay",
 "title" : "USHistory",
 "gradeLevel" : "9",
 "summary" : "teaching kids that history."
}
*/
