exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id');
    table.string('user_name').unique().notNullable();
    table.string('user_email').notNullable();
    table.string('password').notNullable();
    table.string('password_salt').notNullable();
    table.timestamps();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};