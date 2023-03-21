import { sep, join } from "path";
import { fileURLToPath } from "url";

// gets absolute path to app root directory
const getRootDirectory = () => {
  const pathToThisFile = __dirname;
  const pathToThisFileArr = pathToThisFile.split(sep);
  const indexOfSrc = pathToThisFileArr.lastIndexOf("src");
  const rootDirArr = pathToThisFileArr.slice(0, indexOfSrc);

  return rootDirArr.join(sep);
};

export { getRootDirectory };
