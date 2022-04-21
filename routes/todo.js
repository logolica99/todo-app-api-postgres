const express = require("express");
const pool = require("../db/connect");
router = express.Router();

//create a todo

router.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//get all todos
router.get("/todos", async (req, res) => {
  try {
    const all_todos = await pool.query("SELECT * FROM todo");
    res.json(all_todos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//get a todo
router.get("/todo/:id", async (req, res) => {
  try {
    console.log(req.params);
    const todo_id = req.params.id;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [
      todo_id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//update a todo
router.put("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description=$1 WHERE todo_id=$2",
      [description, id]
    );
    res.json("TODO was updated!");
  } catch (err) {
    console.log(err.message);
  }
});

//delete a todo
router.delete("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id=$1", [
      id,
    ]);
    res.json("TODO was deleted");
  } catch (err) {
    console.log(err.message);
  }
});
//exporting router
module.exports = router;
