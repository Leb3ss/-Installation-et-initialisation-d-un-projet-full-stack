// Declare the action

import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  console.info(req.query);

  res.send("Welcome to Wild Series !");
};

// Export it to import it somewhere else

export default { sayWelcome };
