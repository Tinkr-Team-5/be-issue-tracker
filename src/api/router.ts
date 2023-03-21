import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import path from "path";
import fs from "fs";

import { getRootDirectory } from "../utils";
import { mongoHealth } from "../data/conn";

const setupSwagger = () => {
  const docPath = path.join(getRootDirectory(), "swagger.yaml");
  const doc = fs.readFileSync(docPath, "utf8");
  return YAML.parse(doc);
};

const router = express.Router();

router.get("/api/health", async (req, res) => {
  const dbHealth = await mongoHealth();
  const appHealth = {
    status: "OK",
    uptime: `${process.uptime().toFixed(2)} seconds`,
    database: dbHealth,
    date: new Date().toLocaleString(),
  };

  res.status(200).json(appHealth);
});

router.use("/api/docs", swaggerUi.serve);
router.get("/api/docs", swaggerUi.setup(setupSwagger()));

export default router;
