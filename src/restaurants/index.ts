import { RestaurantRepository } from "./repository/restaurant.repository";
import { RestaurantController } from "./restaurant.controller";
import { RestaurantUseCase } from "./use-case/restaurant.use-case";

const restaurantRepository = new RestaurantRepository();
const restaurantUseCase = new RestaurantUseCase(restaurantRepository);
const restaurantController = new RestaurantController(restaurantUseCase);

export { restaurantController };