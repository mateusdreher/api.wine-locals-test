import { Router, Request, Response } from "express";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { restaurantController } from "../restaurants";

const restaurantsRoute = Router();

restaurantsRoute.get('/', new AuthMiddleware().authenticate, (request: Request, response: Response) => {
	return restaurantController.list(request, response);
});
restaurantsRoute.get('/:id', new AuthMiddleware().authenticate, (request: Request, response: Response) => {
	return restaurantController.getById(request, response);
});

export { restaurantsRoute };