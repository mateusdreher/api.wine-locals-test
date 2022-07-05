import { Router, Request, Response } from "express";
import { dishController } from "../dishes";

const dishesRoute = Router();

dishesRoute.get('/', (request: Request, response: Response) => {
	return dishController.list(request, response);
});

dishesRoute.post('/new', (request: Request, response: Response) => {
	return dishController.create(request, response);
});

export { dishesRoute };