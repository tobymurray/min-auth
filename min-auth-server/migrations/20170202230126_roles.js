exports.up = (knex, Promise) => {
  return knex.schema.withSchema(process.env.DB_SCHEMA_NAME).createTable('roles', (table) => {
    table.increments('role_id');
    table.string('role_name').unique().notNullable();
    table.timestamps();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.withSchema(process.env.DB_SCHEMA_NAME).dropTable('roles');
};
