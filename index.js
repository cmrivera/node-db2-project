const express = require("express");
//const helmet = require("helmet")

const carsRouter = require("./cars/cars-router");
const server = express();

const port = process.env.PORT || 5000;

server.use(express.json());

//server.use(helmet())
server.use("/cars", carsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

server.get("/", (req, res) => {
  res.status(200).json({ message: "Pulluing from server" });
});

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
