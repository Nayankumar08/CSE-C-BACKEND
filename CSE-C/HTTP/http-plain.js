const http = require("http");
const fs = require("fs/promises");
const port = 3000;
const server = http.createServer(async (req, res) => {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type','text/plain');
  res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write("hello cse-c students");
  const readdata = await fs.readFile("./home.html", "utf-8");
  res.end(readdata);
});
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
