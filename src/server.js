import express from "express";
import { Routes } from "./routes.js";

const app = express();
app.use(express.json());
app.use(Routes);

export { app };

