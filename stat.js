#!/usr/bin/env node
const { clean } = require("./clean.js");
let stdin = process.openStdin();

let data = "";

stdin.on("data", function (chunk) {
  data += chunk;
});

stdin.on("end", function () {
  const ans = clean(data);
  process.stdout.write(ans);
});
