const Course = require('../models/Course');
const Class = require('../models/Class');

class ClassController {
    async store(req, res) {
        //Criar um Arquivo
        const course = await Course.findById(req.params.id);

        const aula = await Class.create({
            title: req.body.title,
            about: req.body.about,
            link:req.body.link,
            teacher: req.body.teacher,
        });

        course.class.push(aula);
        await course.save();

        req.io.sockets.in(course._id).emit('class', aula);


        return res.json(aula);
    }
}


module.exports = new ClassController();