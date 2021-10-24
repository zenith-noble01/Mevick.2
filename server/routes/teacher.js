const router = require("express").Router();
const Teacher = require("../models/Teacher");

//create a student
router.post("/", async (req, res) => {
  const newTeacher = new Teacher(req.body);
  try {
    const savedTeacher = await newTeacher.save();
    res.status(200).json(savedTeacher);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a teaher
router.put("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    await teacher.updateOne({ $set: req.body });
    res.status(200).json("the teacher has been updated sucessfully");
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete a teacher
router.delete("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
      await teacher.deleteOne();
      res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});


//get a teacher
router.get("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    res.status(200).json(teacher);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user's all Teachers
router.get('/', async (req, res) =>{
    try {
        let teacher;
        teacher = await Teacher.find()
        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
