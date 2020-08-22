module.exports = {
  client: "sqlite3", //specifize Data base management system
  useNullAsDefault: true, //an option requires for SQLite
  connection: {
    filename: "./data/cars.db3", //location of our database files
  },
};
