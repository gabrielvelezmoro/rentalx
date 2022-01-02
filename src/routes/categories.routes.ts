import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

const categoriesRepository = new CategoriesRepository();
const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRoutes };
