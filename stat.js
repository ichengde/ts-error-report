#!/usr/bin/env node
let stdin = process.openStdin();

let data = '';

stdin.on('data', function (chunk) {
  data += chunk;
});

stdin.on('end', function () {
    
  process.stdout.write(clear);
});
