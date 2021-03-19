const db = require("../data/config")

function find() {
	return db("serverData")
}

function findById(id) {
	return db("serverData").where({ id }).first()
}

async function create(data) {
	const [id] = await db("serverData").insert(data)
	return findById(id)
}

async function update(id, data) {
	await db("serverData").where({ id }).update(data)
	return findById(id)
}

function remove(id) {
	return db("serverData").where({ id }).del()
}

module.exports = {
	find,
	findById,
	create,
	update,
	remove,
}
