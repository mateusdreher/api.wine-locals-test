import { App } from "./app";

const PORT = process.env.PORT || 3000;
const app = new App().express;

try {
	app.listen(PORT);
	console.log(`Servidor rodando an porta ${PORT}`)
}
catch(exception) {
	console.error(exception);
}