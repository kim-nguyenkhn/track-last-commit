const shell = require("shelljs");
const childProcess = require("child_process");
const path = require("path");

const gitHashLength = 7;
const gitHash = childProcess
  .execSync("git rev-parse HEAD")
  .toString()
  .substring(0, gitHashLength);
const buildDate = new Date();
const month = buildDate.getMonth() + 1;
const packageVersion = `${require("./package.json").version}`;
const packageName = `${require("./package.json").name}`;

shell.exec(
  `echo "/*${packageName}_${packageVersion}_${gitHash}_${buildDate.getFullYear()}.${month}.${buildDate.getDate()}*/"|cat - ${path.resolve(__dirname, "dist/index.js")} > /tmp/out && mv /tmp/out ${path.resolve(__dirname, "dist/index.js")}`
);
