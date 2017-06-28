import next from 'next';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import LessonRouter from './routers/LessonRouter';
// import SubjectRouter from './routers/SubjectRouter';
import ProfileRouter from './routers/ProfileRouter';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  dev,
  dir: path.resolve(__dirname)
});
const handle = nextApp.getRequestHandler();
const PORT = 3001;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/aca-demo-june30');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongoose and db are connected'
);
});

nextApp.prepare().then(() => {
  const app = express();

  // All backend handlers
  app.use(bodyParser.json());
  // app.use(LessonRouter);
  // app.use(SubjectRouter);
  app.use(ProfileRouter);

  // Handle everything that is not covered in above routes with next.js
  app.get('*', (request, response) => {
    return handle(request, response);
  });

  // Error handling middleware
  // @TODO remove disable
  // eslint-disable-next-line
  app.use('*', (err, request, response, nexthandler) => {
    return response.status(500).json({
      message: err.message
    });
  });

  app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('Server listening on port ' + PORT);
  });
});


// import next from 'next';
// import path from 'path';
// import express from 'express';
//
// const dev = process.env.NODE_ENV !== 'production';
// const nextApp = next({
//   dev,
//   dir: path.resolve(__dirname)
// });
// const handle = nextApp.getRequestHandler();
//
// const PORT = 3001;
//
// nextApp.prepare().then(() => {
//   const app = express();
//
//   // Define all you backend handlers here...
//
//   // Handle everything that is not covered in above routes with next.js
//   app.get('*', (request, response) => {
//     return handle(request, response);
//   });
//
//   app.listen(PORT, () => {
//     // eslint-disable-next-line
//     console.log('Server listening on port ' + PORT);
//   });
// });
