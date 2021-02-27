exports.up = async function(knex) {
	await knex.schema.createTable("shouts", (table) => {
		table.increments()
		table.string("message").notNullable()
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("shouts")
}
