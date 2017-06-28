import TeacherProfile from '../models/TeacherProfileModel';

const ProfileController = {
  create: (request, response, next) => {
    const addedLesson = new TeacherProfile(request.body);

    addedLesson.save()
      .then(() => {
        return response.json(addedLesson);
      })
      .catch(err => {
        return next(err);
      });
  },

  list: (request, response, next) => {
    TeacherProfile.find({}).exec()
      .then(data => {
        console.log('Teacher DB fetched, 19');
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  listOne: (request, response, next) => {
    const query = request.params.id;

    TeacherProfile.findById(query)
      .then(data => {
        console.log('Teacher DB, individual was requested, 32', data);
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  update: (request, response, next) => {
    const itemBody = request.body;
// @TODO need to change this data structure to match what the lesson plan will look like
// @TODO may need to change the data.subjects to edit them later
    TeacherProfile.findById(request.params.id).exec()
      .then(data => {
        data.username = itemBody.username || data.username;
        data.password = itemBody.password || data.password;
        data.subjects = data.subjects;
        data.years = itemBody.years || data.years;
        data.followers = itemBody.followers || data.followers;
        data.following = itemBody.following || data.following;
        data.avatar = itemBody.avatar || data.avatar;
        console.log('Profile ', request.params.id, ' was updated, 53');

        return data.save();
      })
        .then(data => {
          return response.json(data);
        })
        .catch(err => {
          return next(err);
        });
  },

  delete: (request, response, next) => {
    const query = request.params.id;

    TeacherProfile.findByIdAndRemove(query).exec()
      .then(data => {
        console.log('Profile ', query, 'was deleted, 70');
        return response.json(data);
      })
      .catch(err => {
        console.log('This is from ProfileController, 74', query);
        console.log('This is from ProfileController, 77', err.message);
        return next(err);
      });
  }
};

export default ProfileController;
