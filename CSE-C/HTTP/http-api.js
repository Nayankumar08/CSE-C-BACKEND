const http = require("http");
const axios = require("axios");
const port = 3000;
const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    "content-Type": "text/html",
  });
  const response = await axios.get("https://dummyjson.com/products");
  //const data=await response.json();
  //const jdata=JSON.parse(data);
  const adata = response.data.products;
  let frontend = `<html><head></head><body>`;
  adata.forEach((product) => {
    frontend += `<div><img src=${product.thumbnail}></div>`;
  });
  frontend += `</body></html>
  <style>
  body{
  display :flex;
  }
  img{
  width:200px;
  border:2px solid black;
  }
  </style>`;
  res.end(frontend);
});
server.listen(port, () => {
  console.log("first server listening on port" + port);
});
