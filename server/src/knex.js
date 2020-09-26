const knex = require('knex');

module.exports = function (app) {
  const { client , connection} = app.get('mysql');
  // const connection = {
  //   host : '127.0.0.1',
  //   user : 'root',
  //   password : '',
  //   database : 'entropychat_app'

  // }
  const db = knex({ client, connection });

  app.set('knexClient', db);
};
