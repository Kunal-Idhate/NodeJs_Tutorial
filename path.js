const path = require("path");

const extname = path.extname("./index.js");
console.log("Type Of file is :- ", extname);

const Last_file = path.basename(
  "D:Web work spaceFull Backend/nodeJsTutorial/index.js"
);
console.log("you are currently in :- ", Last_file);

const Dir_name = path.dirname(
  "D:Web work spaceFull Backend/nodeJsTutorial/index.js"
);
console.log("you are currently in :- ", Dir_name);

const New = "/new";
const joined_path = path.join(
  "D:Web work spaceFull Backend/nodeJsTutorial/index.js",
  New
);
console.log("you are Joined file is :- ", joined_path);
