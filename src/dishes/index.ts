import { DishController } from "./dish.controller";
import { DishRepository } from "./repository/dish.repository";
import { DishUseCase } from "./use-case/dish.use-case";

const dishRepository = new DishRepository();
const dishUseCase = new DishUseCase(dishRepository);
const dishController = new DishController(dishUseCase);

export { dishController };