import { Router, Request, Response } from "express";
import { restaurantController } from "../restaurants";

const restaurantsRoute = Router();

restaurantsRoute.get('/', (request: Request, response: Response) => {
	return restaurantController.handle(request, response);
});

export { restaurantsRoute };