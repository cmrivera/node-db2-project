const express = require("express");
const helmet = require("helmet");
const carsRouter = require("./cars/cars-router");

const server = express();
const port = process.env.port || 5000;

server.use(helmet());
server.use(express.json());

server.use(carsRouter);

server.use((err, req, res, nexr) => {
  console.log(err);
  res.status(500).json({ message: "something went wrong" });
});

server.listen(port, () => {
  console.log(`Running api on http://localhost:${port}`);
});
