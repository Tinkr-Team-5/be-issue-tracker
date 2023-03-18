import app from "./app";
import * as env from "../env";

const startServer = () => {
  return new Promise((resolve, reject) => {
    const server = app.listen(env.PORT);
    server.once("listening", () =>
      resolve(`Server running on port ${env.PORT}`)
    );
    server.once("error", (err) => reject(`Server failed to start: ${err}`));
  });
};

export default startServer;
