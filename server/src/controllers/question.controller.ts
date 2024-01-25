import { Request, Response, Router } from "express";
import express from "express";
import QuestionsService from "../services/questions.services";
const services = new QuestionsService();
const questionController = express.Router();
questionController.get("/:id", async (req: Request, res: Response) => {
  const param = Number(req.params.id);
  try {
    const result = await services.getInFoQuestion(param);
    res.json(result);
  } catch (error) {
    res.json("error get all");
  }
});
questionController.get("/:id/answers", async (req: Request, res: Response) => {
  const param = Number(req.params.id);
  try {
    const result = await services.getInFoByAllAnswer(param);
    res.json(result);
  } catch (error) {
    res.json("error info");
  }
});
questionController.get("/", async (req: Request, res: Response) => {
  const category_id = req.query.category || 1;
  const level = req.query.level || 2;
  const limit = req.query.limit || 5;
  try {
    const result = await services.getAllByData(category_id, level, limit);
    res.json(result);
  } catch (error) {
    res.json("error by data");
  }
});
questionController.post("/", async (req: Request, res: Response) => {
  const newData = {
    comment: req.body.comment,
    level: req.body.level,
    category_id: req.body.category_id,
  };
  try {
    const result = await services.addNewData(newData);
    res.json(result);
  } catch (error) {
    res.json("lỗi add new");
  }
});
export default questionController;
