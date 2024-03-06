
module.exports = (sequlize, Sequelize) => {
    const ToDoList = sequlize.define("toDoList", {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        done: Sequelize.BOOLEAN
    })
    return ToDoList
}