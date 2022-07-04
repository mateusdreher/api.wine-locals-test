import { Router, Request, Response } from "express";
import { authController } from '../auth';

const authRoute = Router();

authRoute.get('/', (request: Request, response: Response) => {
	return authController.handle(request, response);
});

export { authRoute };