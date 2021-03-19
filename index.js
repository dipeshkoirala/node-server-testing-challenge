const server=require("./server")
const port = process.env.PORT ||2222

server.listen(port, () => {
	console.log(`server running at http://localhost:${port}`)
})

