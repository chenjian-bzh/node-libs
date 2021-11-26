const promisify = require("../src/promisify");
const { readFile } = require("fs");

const readFilePromise = promisify(readFile);

readFilePromise("../src/promisify.js", "utf-8").then((res) => console.log(res));
