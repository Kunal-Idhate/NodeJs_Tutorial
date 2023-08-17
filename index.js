const http = require("http");
const Age = require("./myProfile");
const firstName = require("./myProfile");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("<h1>Home Page</h1>");
  else if (req.url === "/about") res.end("<h1>About Page</h1>");
  else if (req.url === "/contact") res.end("<h1>Cotact Page</h1>");
  else res.end("<h1>Not Found</h1>");
});

server.listen(5000, () => {
  console.log("Server is working in NodeJs .....");
});

console.log(Age, " ", firstName);