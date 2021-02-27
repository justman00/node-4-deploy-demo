const db = require("../data/config")

function find() {
	return db("shouts")
}

function findById(id) {
	return db("shouts")
		.where({ id })
		.first()
}

function add(shout) {
	return db("shouts")
		.insert(shout, "id")
		.then(([id]) => findById(id))
}

function remove(id) {
	return db("shouts").where({ id }).delete()
}

module.exports = {
	find,
	findById,
	add,
	remove,
}