module.exports = function (knex) {
  return {
    logVersion: function () {
      knex.raw('SELECT version()').then(function (resp) {
        dbServer = resp.rows[0].version
        return dbServer;
      }).catch(function (error) {
        console.log("Connection to database failed");
        console.error(error);
        return error;
      });
    }
  }
}