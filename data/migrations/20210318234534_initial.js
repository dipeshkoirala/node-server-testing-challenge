
exports.up =async function(knex) {
  await knex.schema.createTable("serverData",(tbl)=>{
      tbl.increments()
      tbl.text("name").notNullable()
      tbl.text("email")
})
};

exports.down =async function(knex) {
 await knex.schema.dropTableIfExists("serverData") 
};
