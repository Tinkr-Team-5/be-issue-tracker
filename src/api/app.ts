import express from "express";
import cors from "cors";
import "express-async-errors";

import { httpLogger, errorHandler, unknownEndpoint } from "./middleware";
import router from "./router";
import * as env from "../env";

const app = express();

app.use(cors({ origin: `http://localhost:${env.FRONTEND_PORT}` }));
app.use(express.json());
app.use(express.static("dist"));
if (process.env.NODE_ENV === "dev") app.use(httpLogger());
app.use(router);
app.use(errorHandler);
app.use(unknownEndpoint);

export default app;
