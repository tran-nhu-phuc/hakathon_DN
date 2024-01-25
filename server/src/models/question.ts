import { DataTypes } from "sequelize";
import sequelize from "../configs";
import Category from "./category";

const Questions = sequelize.define(
  "question",
  {
    question_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    level: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
Questions.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Category.hasMany(Questions, { foreignKey: "category_id" });

export default Questions;
