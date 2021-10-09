const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const contactRoute = require("./routes/contact");
const studentRoute = require("./routes/student");
const teacherRoute = require("./routes/teacher");
const cors = require('cors')
const nodemailer = require('nodemailer');
const path = require("path");



dotenv.config();
app.use(cors())

const PORT = process.env.PORT || 7000

// const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO,
 {useNewUrlParser: true,
  useUnifiedTopology: true}).then(console.log('connected'));

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.post('/api/sendMail', (req, res)=> {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.ACCOUNT_URL,
            pass: process.env.PASSWORD_URL
        }
    })
    const mailOPtion = {
        from: req.body.email,
        to: 'zenithnoble354@gmail.com',
        subject: req.body.username,
        text: req.body.message,
        // html: `<p>${req.body.phone}</p>`
        
    }

    transporter.sendMail(mailOPtion, (error, info) =>{
        if(error){
            console.log(error);
            res.send(error)
        }else{
            console.log('email was send');
            res.send('success');
        }
    })
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/contact", contactRoute);
app.use("api/students", studentRoute);
app.use("api/teachers", teacherRoute);
app.listen(PORT, () => {
  console.log("Backend server is running!");
});
