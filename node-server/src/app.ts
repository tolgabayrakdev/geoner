import express from "express";
import 'dotenv/config';

const app = express();
const port: number = 3000;

app.listen(port, () => {
    console.log("Backend server running on port:5000");
})

app.get("/", (req, res) => {
  res.send("Hello from nodejs with ts server" + ' ' + process.env.name)
})