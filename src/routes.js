const express = require('express');
const routes = express.Router();

const ClassController = require('./controllers/ClassController');
const CourseController = require('./controllers/CourseController');

//GET / POST / PUT / DELETE

routes.post('/course', CourseController.store);
routes.get('/courses', CourseController.showall);
routes.get('/course/:id', CourseController.show);


routes.post('/course/:id/class', ClassController.store);

module.exports = routes;