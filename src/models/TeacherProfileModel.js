import mongoose from 'mongoose';

const teacherProfileModel = mongoose.Schema({
  username: {
    type: String,
    maxlength: [ 50, 'Choose a shorter name.' ],
    minlength: [ 5, 'Choose a longer name.' ],
  },
  password: {
    type: String,
    maxlength: [ 50, 'Choose a shorter password.' ],
    minlength: [ 5, 'Choose a longer password.' ],
  },
  subjects: {
    type: Array,
  },
  years: {
    type: String,
  },
  followers: {
    type: Number,
  },
  following: {
    type: Number,
  },
  avatar: {
    type: String,
    maxlength: 1000,
    minlength: 5,
  }
});

export default mongoose.model('Teacher', teacherProfileModel);
