exports.up = function (knex) {
  //the change we want to make to our data schema
  return knex.schema.createTable("carList", (tbl) => {
    tbl.increments();
    tbl.text("carName", 128).unique().notNullable();
    tbl.integer("Vin").unique().notNullable();
    tbl.text("Make").unique().notNullable();
    tbl.text("Model").unique().notNullable();
    tbl.integer("Mileage", 128);
  });
};

exports.down = function (knex) {
  //undoing the change to the  data schema
  return knex.schema.dropTableIfExists("carList");
};

//in terminal type knex migrate:latest to run this table in the cars file on SQLite
