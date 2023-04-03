// require("dotenv")
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const routers = require("./routers/posts.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routers);
app.use("/data",(req,res)=>{res.send('server started')})
mongoose
  .connect('mongodb+srv://pnaman142:pnaman142@cluster0.wjbufkj.mongodb.net/' + "InstaCloneByNaman")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
    console.log("Cannot be connected to DB");
  });

app.listen(process.env.PORT||5000, () => {
  console.log("Server connected and running on the port ", process.env.PORT||5000);
});

// module.exports = app;
