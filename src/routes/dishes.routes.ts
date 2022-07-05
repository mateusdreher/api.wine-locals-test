import { Router, Request, Response } from "express";
import { dishController } from "../dishes";

const dishesRoute = Router();

dishesRoute.get('/restaurant/:restaurant_id', (request: Request, response: Response) => {
	return dishController.listByRestaurant(request, response);
});

dishesRoute.post('/new', (request: Request, response: Response) => {
	return dishController.create(request, response);
});

export { dishesRoute };