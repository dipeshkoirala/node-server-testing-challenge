const express = require("express")
const ServerData = require("./model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await ServerData.find())
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const data= await  ServerData.findById(req.params.id)
		res.json(data)
	} catch(err) {
		next(err)
	}
})

router.post("/", async(req,res,next)=>{
	try{
const hobbit =await ServerData.create(req.body)
res.status(201).json(hobbit)
	}catch(err){
		next(err)
	}
})
module.exports = router