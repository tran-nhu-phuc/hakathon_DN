import { Op } from "sequelize";
import Category from "../models/category";

class CategoryRepository {
  async getAll() {
    return await Category.findAll();
  }
  async getInFoCateGory(category_id: number) {
    return await Category.findAll({
      where: {
        category_id,
      },
    });
  }
  async addNewCategory(newData: any) {
    return await Category.create(newData);
  }
}
export default CategoryRepository;
