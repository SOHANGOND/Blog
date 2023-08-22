const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const CategoryRoute = require("./routes/categories");
const multer = require('multer');
const path = require("path");


dotenv.config();
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")))


mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("hell", err));
    


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, "hello.jpg");
    },
});

const upload = multer({ storage: storage });
app.post("/back/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.use("/back/auth",authRoute);
app.use("/back/users", usersRoute);
app.use("/back/posts", postRoute);
app.use("/back/categories", CategoryRoute);

// app.get("/", (req, res) => {
//     res.send("Welcome to web Development era");

// })

app.listen(3000, () => {
    console.log("Server is listening at port no 3000");
});