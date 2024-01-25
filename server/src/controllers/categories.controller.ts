import { Request, Response, Router } from "express";
import express from "express";
import CategoryService from "../services/categories.services";
const categoryController = express.Router();
const services = new CategoryService();
categoryController.get("/", async (req: Request, res: Response) => {
  try {
    const result = await services.getAll();
    res.json(result);
  } catch (error) {
    res.json("error get all");
  }
});
categoryController.get("/:id", async (req: Request, res: Response) => {
  const param = Number(req.params.id);
  try {
    const result = await services.getInFoCateGory(param);
    res.json(result);
  } catch (error) {
    res.json("error get all");
  }
});
categoryController.post("/", async (req: Request, res: Response) => {
  const newData = {
    name: req.body.name,
  };
  try {
    const result = await services.addNewCategory(newData);
    res.json(result);
    console.log("add new ok");
  } catch (error) {
    res.json("error get all");
  }
});
export default categoryController;
