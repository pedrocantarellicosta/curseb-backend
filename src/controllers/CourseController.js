const Course = require('../models/Course');

class CourseController {
    async store(req, res) {
        const course = await Course.create({
            title:req.body.title,
            about: req.body.about
        });

        return res.json(course);
       
    }
    async showall(req, res) {
        const courses = await Course.find().populate();
        return res.json(courses);
    }
    async show(req, res) {
        const course = await Course.findById(req.params.id).populate({
            path: 'class',
            options: { sort: { createdAt: -1 } }

        });

        return res.json(course);
    }
}


module.exports = new CourseController();