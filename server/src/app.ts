// Load the express module to create a web application

import express from "express";

const app = express();

// ...BEAUCOUP de lignes à lire, jusqu'à :

// Import the API router

import router from "./router";

// Mount the API router under the "/api" endpoint

app.use(router);

// ...BEAUCOUP de lignes à lire, jusqu'à :

export default app;
