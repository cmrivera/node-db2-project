const knex = require("knex");
const knexfile = require("../knexfile");

//start connection to database so we can then
//import it into other files

module.exports = knex(knexfile);
