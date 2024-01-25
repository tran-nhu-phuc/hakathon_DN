import { DataTypes } from "sequelize";
import sequelize from "../configs";

const Category = sequelize.define(
  "category",
  {
    category_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
export default Category;
