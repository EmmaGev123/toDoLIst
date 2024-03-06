const express = require("express")
const { addTasks } = require("./router/addTasks")
const { router } = require("./router/router")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", router)
app.listen(8080)




















