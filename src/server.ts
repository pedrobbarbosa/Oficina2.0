import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import createConnection from "./database";

import "reflect-metadata";
import "./shared/container";

import { router } from "./routes";
import swaggerFile from "./swagger.json";
import { AppError } from "./errors/AppError";

createConnection();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error ${err.message}`
    })
});


app.listen(3333, () => console.log("Serviço executando"));
