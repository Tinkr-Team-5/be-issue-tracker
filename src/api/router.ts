import express from "express";
import { mongoHealth } from "../data/conn";

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

export default router;
