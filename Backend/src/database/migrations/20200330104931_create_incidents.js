
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments(); 
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('matricula').notNullable();
        table.string('email').notNullable();
        table.decimal('ramal').notNullable();
        table.string('area').notNullable();
        table.string('funcao').notNullable();
        table.string('senha').notNullable();
        // perm adm e inserção
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
