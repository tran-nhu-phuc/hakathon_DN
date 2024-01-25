import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize("hackathon", "root", process.env.PASS_WORD, {
  host: "localhost",
  dialect: "mysql",
});
export default sequelize;
