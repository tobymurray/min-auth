exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id');
    table.specificType('user_name', 'citext').unique().notNullable();
    table.specificType('user_email', 'citext').notNullable();
    table.string('password').notNullable();
    table.timestamps();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};