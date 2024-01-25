import CategoryRepository from "../repositories/categories.repositories";
import QuestionRepository from "../repositories/questions.repositories";

class CategoryService {
  private categoryRepository: CategoryRepository;
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }
  async getAll() {
    return await this.categoryRepository.getAll();
  }
  async getInFoCateGory(id: number) {
    return await this.categoryRepository.getInFoCateGory(id);
  }
  async addNewCategory(newData: any) {
    return await this.categoryRepository.addNewCategory(newData);
  }
}
export default CategoryService;
