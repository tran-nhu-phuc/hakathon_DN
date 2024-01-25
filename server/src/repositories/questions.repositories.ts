import { Op } from "sequelize";
import Questions from "../models/question";
import Answer from "../models/answer";
import Category from "../models/category";

class QuestionRepository {
  async getInFoQuestion(question_id: number) {
    return await Questions.findAll({
      where: {
        question_id,
      },
    });
  }
  async getInFoByAllAnswer(question_id: number) {
    return await Questions.findAll({
      include: Answer,
      where: {
        question_id,
      },
    });
  }
  async getAllByData(category_id: any, level: any, limit: any) {
    return await Questions.findAll({
      include: {
        model: Category,
      },
      where: {
        category_id,
        level,
      },
      limit,
    });
  }
  async addNewData(newData: any) {
    return await Questions.create(newData);
  }
}
export default QuestionRepository;
