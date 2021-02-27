exports.seed = async function(knex) {
	await knex("shouts").del()
}
