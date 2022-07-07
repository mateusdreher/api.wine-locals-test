import { Router, Request, Response } from "express";
import { dishController } from "../dishes";
import { AuthMiddleware } from "../middlewares/auth.middleware";

const dishesRoute = Router();

dishesRoute.get('/restaurant/:restaurant_id', new AuthMiddleware().authenticate, (request: Request, response: Response) => {
	return dishController.listByRestaurant(request, response);
});

dishesRoute.post('/new', new AuthMiddleware().authenticate, (request: Request, response: Response) => {
	return dishController.create(request, response);
});

export { dishesRoute };