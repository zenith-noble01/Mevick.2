const router = require("express").Router();
const Admin = require("../../models/admin/Admin");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //create new user
    const newAdmin = new Admin({
      adminname: req.body.adminname,
      email: req.body.email,
      password: hashedPassword,
    });
    //save user and respond
    const admin = await newAdmin.save();
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    //verifying the user email
    const admin = await Admin.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");
    //verifying the user password
    const validPassword = await bcrypt.compare(req.body.password, admin.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
