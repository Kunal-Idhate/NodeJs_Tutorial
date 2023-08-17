// importing fs module
const fs = require("fs");
// you can aslo write import from by changing typw of package

// console.log(fs);

// using readfile
fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("This is from Async call : - ", data);
  }
});

// For making it synchronous We use read file sync
const syncFile = fs.readFileSync("./sample.txt", "utf-8");
console.log("This is from Sync call : - ", syncFile);

//for creating file asynchronously and adding text to it
fs.writeFile("./createdByAsync.txt", "This is creaed by Async", () => {
  console.log("Written async file");
});

//for creating file asynchronously and adding text to it
fs.writeFileSync("./createdBySync.txt", "This is creaed by Sync", () => {
  console.log("Written sync file");
});
