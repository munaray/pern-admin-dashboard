import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import helmet from "helmet";
import morgan from "morgan";

import { middlewareErrorHandler } from "./middleware/error";
import routes from "./routes/index";

export const app = express();

// body parser
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// security
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//cookie parser
app.use(cookieParser());

// cors => cross origin resource sharing
app.use(
  cors({
    origin: "*",
  })
);

// routes
app.use("/api/v1", routes);

// Testing api
app.get("/api/test", (request: Request, response: Response) => {
  response.status(200).send({
    success: true,
    message: "Your API is working fine",
  });
});

// Unknown API route
app.all("*", (request: Request, response: Response) => {
  response.status(404).send({
    success: false,
    message: `${request.originalUrl} route you are trying to reach does not exist`,
  });
});

app.use(middlewareErrorHandler);