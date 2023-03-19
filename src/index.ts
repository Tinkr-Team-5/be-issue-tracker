import startServer from "./api/server";
import * as db from "./data/conn";

const main = async () => {
  try {
    const res = await Promise.all([startServer(), db.startDb()]);
    res.forEach((msg) => console.log(msg));
  } catch (err) {
    console.error("Failed to start application");
    console.error(err);
  }
};

main();

let dog = "woof"
