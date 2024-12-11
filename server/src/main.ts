import "dotenv/config";
import "../database/checkConnection";
import app from "./app";
import { Request, Response } from "express";

const port = process.env.APP_PORT;

// Déclaration de la route avant le démarrage du serveur
const sayHello = (req: Request, res: Response) => {
	res.send("Welcome to Wild Series !");
};

app.get("/", sayHello);

// Démarrage du serveur
app
	.listen(port, () => {
		console.info(`Server is listening on port ${port}`);
	})
	.on("error", (err: Error) => {
		console.error("Error:", err.message);
	});
