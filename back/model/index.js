const { Sequelize } = require("sequelize");

const sequelize=new Sequelize("node3.3","root","",{
    host:"localhost",
    port:3306,
    dialect:"mysql"
})
const ToDoList=require("./ToDoList")(sequelize,Sequelize)

sequelize.sync()
module.exports={ToDoList}