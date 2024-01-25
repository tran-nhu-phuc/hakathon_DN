import { Express } from "express";
import categoryController from "../controllers/categories.controller";
import questionController from "../controllers/question.controller";

const Router = (app: Express) => {
  app.use("/api/v1/categories", categoryController);
  app.use("/api/v1/questions", questionController);
};

export default Router;
