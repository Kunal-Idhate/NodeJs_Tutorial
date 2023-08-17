const os = require("os");

console.log(
  os.freemem(),
  "is freed memory of total ",
  os.totalmem(),
  "memory. !!!"
);

console.log("Host name of the surrent os is :-", os.hostname());
