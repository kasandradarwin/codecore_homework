/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('cohorts', table => {
        table.increments('id'); 
        table.string('team_name'); 
        table.text('members');
        table.text('logo_url'); 
        table.timestamps(true, true);
      })
    };
  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('cohorts')
  
};
