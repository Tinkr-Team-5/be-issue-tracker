import mongoose from "mongoose";
import * as env from "../env";

const startDb = async () => {
  await mongoose.connect(env.getMongoUri());
  return `Database connected at ${env.getMongoUri()}`;
};

const stopDb = async () => await mongoose.connection.close();

const mongoHealth = async () => await mongoose.connection.db.stats();

export { startDb, stopDb, mongoHealth };
