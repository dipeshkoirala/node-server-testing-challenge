const express = require("express")

const serverdataRouter=require("./serverData/router")


const server = express()



server.use(express.json())

server.use("/serverdata",serverdataRouter)
server.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})



module.exports=server