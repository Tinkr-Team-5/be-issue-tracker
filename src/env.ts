import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ?? "3001";
const FRONTEND_PORT = process.env.FRONTEND_PORT ?? "3000";
const JWT_SECRET = process.env.JWT_SECRET ?? "secret";
const getMongoUri = () => {
  switch (process.env.NODE_ENV) {
    case "dev":
      return process.env.LOCAL_MONGO_URI ?? "undefined";
    case "test":
      return process.env.TEST_MONGO_URI ?? "undefined";
    default:
      return process.env.MONGO_URI ?? "undefined";
  }
};

export { PORT, FRONTEND_PORT, getMongoUri, JWT_SECRET };
