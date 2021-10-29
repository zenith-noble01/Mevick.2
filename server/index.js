require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const dummydata = require('./routes/dummydata')
const cors = require('cors');
const path = require("path");
const connectDb = require('./config/db')

//connect to database
connectDb()

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

app.get("/api/dummydata", (req, res) =>{
  res.json(dummydata)
})

app.use(cors())
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const PORT = process.env.PORT || 7000;

const server = app.listen(PORT, () => {
  console.log("Backend server is running!");
});

//handle unhandledRejection errors for not giving something precise
process.on("unhandledRejection", (err, promise) =>{
  console.log(`Log Error ${err}`);
  server.close(() => process.exit(1))
})