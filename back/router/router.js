const express = require("express")
const { ToDoListController } = require("../collection/ToDoListController")

const router = express.Router()

router.post("/toDoList",ToDoListController.createToDoList)
router.get("/toDoList",ToDoListController.toDoList)
router.get("/toDoList/:id",ToDoListController.toDoListById)
router.patch("/toDoList/:id",ToDoListController.updateToDoList)
router.patch("/toDoListDone/:id",ToDoListController.toDoListDone)
router.delete("/toDoList/:id",ToDoListController.delToDoListById)

module.exports={router}