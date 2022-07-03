import { Router, Request, Response } from "express";

const healthRoute = Router();

healthRoute.get('/', (request: Request, response: Response) => {
	return response.json({message: 'API OK'});
});

export { healthRoute };