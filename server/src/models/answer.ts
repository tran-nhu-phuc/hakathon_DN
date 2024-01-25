import { DataTypes } from "sequelize";
import sequelize from "../configs";
import Questions from "./question";

const Answer = sequelize.define(
  "answer",
  {
    answer_id: {
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
  },
  {
    timestamps: true,
  }
);
Answer.belongsTo(Questions, {
  foreignKey: "question_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Questions.hasMany(Answer, { foreignKey: "question_id" });
export default Answer;
