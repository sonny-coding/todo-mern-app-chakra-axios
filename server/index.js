import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connectDB.js";
import Todo from "./mongodb/models/Todo.js";
const PORT = 8080;

// setup dotenv
dotenv.config();
// console.log(process.env.SECRET);

// setup express
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
// health check route
app.get("/hello", async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "hello, this is server",
    });
  } catch (error) {
    res.send(500).json({
      sucess: false,
      message: error,
    });
  }
});

// get all todos
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: error,
    });
  }
});

// create todo
app.post("/api/create-todo", async (req, res) => {
  try {
    console.log("hello this is try block");
    const { task } = req.body;
    console.log("🚀 ~ file: index.js:48 ~ app.post ~ task:", task);

    const newTodo = await Todo.create({
      task,
      finished: false,
    });
    res.status(200).json({
      sucess: true,
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
});

// this function gets hoisted because it is a function declaration
async function startServer() {
  try {
    // to run on local network, app.listen(PORT, ipv4 adress, callback fn)
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
    // connct to db
    connectDB(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
}

startServer();
