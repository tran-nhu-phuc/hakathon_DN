import express, { urlencoded } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./configs";
import createTable from "./models";
import Router from "./routers";
const server = express();
server.use(urlencoded());
server.use(bodyParser.json());
// connect database
sequelize.authenticate();
server.use(cors());
// create table
createTable();
// router
Router(server);
// open server
server.listen(8000, () => {
  console.log("server 8000");
});
