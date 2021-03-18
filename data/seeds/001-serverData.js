
exports.seed = async function(knex) {
  await knex("serverData").truncate()
	await knex("serverData").insert([
		{ name: "dipesh koirala",email:"dk@123.com" },
		{ name: "raju lama",email:"raju.lama@gmail.com" },
		{ name: "baglamukhi kumar" ,email:"baglamai@yahoo.com"},
		{ name: "srinivasan reddy" ,email:"asr@gmail.com"},
	])
};
