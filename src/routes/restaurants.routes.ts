import { Router, Request, Response } from "express";
import { restaurantController } from "../restaurants";

const restaurantsRoute = Router();

restaurantsRoute.get('/', (request: Request, response: Response) => {
	return restaurantController.list(request, response);
});
restaurantsRoute.get('/:id', (request: Request, response: Response) => {
	return restaurantController.getById(request, response);
});

export { restaurantsRoute };