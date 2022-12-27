#! /usr/bin/env node

const fs = require("fs");
const functionPath = "./src/functions/";
const configPath = "./src/functions/config.json";
const args = process.argv.slice(2);
const functionFileName = args[0];

let functionConfig = JSON.parse(fs.readFileSync(configPath, "utf-8"));
fs.writeFile(
  `${functionPath} ${functionFileName}.ts`,
  `//${functionFileName} function file created by Fabby...`,
  function (err) {
    if (err) throw err;
    console.log("Function file is created successfully.");
  }
);

functionConfig.push({
  name: functionFileName,
  private: false,
  runAsSystem: true,
});

fs.writeFile(
  configPath,
  JSON.stringify(functionConfig, null, 2),
  function (err) {
    if (err) throw err;
    console.log("Config file is edited successfully.");
  }
);
