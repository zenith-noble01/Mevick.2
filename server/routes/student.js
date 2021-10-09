const router = require("express").Router();
const Student = require("../models/Student");

//create a student
router.post("/", async (req, res) => {
  const newStudent = new Student(req.body);
  try {
    const saveStudent = await newStudent.save();
    res.status(200).json(saveStudent);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a student
router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    await student.updateOne({ $set: req.body });
    res.status(200).json("the post has been updated");
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete a student
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
      await student.deleteOne();
      res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});


//get a student
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user's all students
router.get('/', async (req, res) =>{
    try {
        let student;
        student = await Student.find()
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
