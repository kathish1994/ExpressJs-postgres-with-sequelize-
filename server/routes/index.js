const { todoItems } = require("../controllers");

const todosController = require("../controllers").todos;
const todoItemsController=require("../controllers").todoItems;
module.exports = (app) => {
  app.get("/api", (req, res) =>
    res.status(201).send({
      message: "Welcome to the todos API!",
    })
  );
  app.post("/api/todos", todosController.create);
  app.get("/api/todos", todosController.list);
  app.post("/api/todos/:todoId/items",todoItemsController.create);
  app.get("/api/todos/:todoId",todosController.retrieve);
  app.put("/api/todos/:todoId",todosController.update);
  app.delete("/api/todo/:todoId",todosController.destroy);
  app.post("/api/todos/:todoId/items",todoItemsController.create);
  app.put("/api/todos/:todoId/items/:todoItemId",todoItemsController.update);
  app.delete("/api/todos/:todoId/items/:todoItemId",todoItemsController.destroy);

  app.all("/api/todos/:todoId/items",(req,res)=>res.status(405).send({
    message:"Method Not Allowed",
  }));

};
