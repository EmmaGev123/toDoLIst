const { ToDoList } = require("../model");

class ToDoListController {
    static async toDoList(req, res) {
        try {
            const tasks = await ToDoList.findAndCountAll({ });
            res.json(tasks); 
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    static async createToDoList(req, res) {
        const {name, description} = req.body
        const list = await ToDoList.create({name, description , done:0})
        res.send(list)
    }
    
    static async toDoListById(req, res) {
        const list = await ToDoList.findOne({ where: { id: req.params.id } });
        if (list) {
          res.send(list);
        } else {
          return res.send({ message: "list not found" });
        }
        res.send(list);
      }

    static async toDoListDone(req, res) {
        const { done } = req.body
        const list = await ToDoList.findOne({
            where: { id: req.params.id },
        });
        if (list) {
            await ToDoList.update({ done },{where:{id:req.params.id}});
            return   
        } 
    }

    static async updateToDoList(req, res) {
        const list = await ToDoList.findOne({
            where: { id: req.params.id },
        });
        if (list) {
            await ToDoList.update({ ...req.body }, { where: { id: req.params.id } });
            return res.send(true);
        } else {
            return res.send(false);
        }
    }


    static async delToDoListById(req, res) {
        const list = await ToDoList.findOne({
            where: { id: req.params.id },
        });
        if (list) {
            await ToDoList.destroy({
                where: { id: req.params.id },
            });
            return res.send(true);
        } else {
            return res.send(false);
        }
    }
}

module.exports = { ToDoListController }