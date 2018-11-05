exports.up = function(knex, Promise) {  
  return Promise.all([
    knex.schema.table('milestones', function (table) {
      table.bigInteger('person_id').references('id').inTable('famous_people')
     })
  ])
};

exports.down = function(knex, Promise) {  
  return Promise.all([
    knex.schema.table('users', function(table){
      table.dropColumn('person_id');
    })
  ])
};
