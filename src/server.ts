import { App } from "./app";
import dotenv from 'dotenv';

dotenv.config({
	path: process.env.NODE_ENV === 'test' ? 'env.test' : '.env'
});

const PORT = process.env.PORT || 3333;
const app = new App().express;

try {
	app.listen(PORT);
	console.log(`Servidor rodando an porta ${PORT}`)
}
catch(exception) {
	console.error(exception);
}