exports.seed = async function(knex) {
	await knex("shouts").insert([
		{ message: "to the lambda web students" },
		{ message: "to the TLs" },
		{ message: "to the SLs" },
		{ message: "to this cohort!" },
	])
}
