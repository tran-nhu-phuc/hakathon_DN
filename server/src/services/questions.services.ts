import QuestionRepository from "../repositories/questions.repositories";

class QuestionsService {
  private questionRepository: QuestionRepository;
  constructor() {
    this.questionRepository = new QuestionRepository();
  }
  async getInFoQuestion(id: number) {
    return await this.questionRepository.getInFoQuestion(id);
  }
  async getInFoByAllAnswer(id: number) {
    return await this.questionRepository.getInFoByAllAnswer(id);
  }
  async getAllByData(category_id: any, level: any, limit: any) {
    return await this.questionRepository.getAllByData(
      category_id,
      level,
      limit
    );
  }
  async addNewData(newData: any) {
    return await this.questionRepository.addNewData(newData);
  }
}
export default QuestionsService;
