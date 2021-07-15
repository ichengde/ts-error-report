#!/usr/bin/env node
import { exec } from "child_process";
import { clean } from "./clean.mjs";

console.log("typescript checking");
exec(
  `npx tsc | awk -F ":" '/error TS/ {print $1 "\t" $2}'`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`Make sure you have installed tsc, stderr: ${stderr}`);
      return;
    }
    console.log(`${clean(stdout)}`);
  }
);
