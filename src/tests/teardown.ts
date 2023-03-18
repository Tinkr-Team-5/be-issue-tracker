// Gets rid of jest openHandles issue
// See: https://stackoverflow.com/questions/50687592/jest-and-mongoose-jest-has-detected-opened-handles
// See: https://fullstackopen.com/en/part4/testing_the_backend
export default () => {
  process.exit(0);
};
