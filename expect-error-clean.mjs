import { exec } from "child_process";
exec(
  `grep -r --exclude-dir=node_modules "@ts-expect-error" ./`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`${clean(stdout)}`);
  }
);
