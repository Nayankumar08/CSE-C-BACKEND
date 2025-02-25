const http = require("http");
const axios = require("axios");
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const response = await axios.get("https://api.github.com/users?per_page=10"); // Fetches 10 users
  const users = response.data;

  let frontend = `
        <html>
        <head>
            <style>
            body{
            display:flex;}
                img {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    border: 3px solid black;
                    display: block;
                    margin: 10px auto;
                }
                div {
                    text-align: center;
                    font-family: Arial, sans-serif;
                    padding: 10px;
                }
                h3 {
                    margin-top: 5px;
                }
            </style>
        </head>
        <body>
    `;

  users.forEach((user) => {
    frontend += `
            <div>
                <img src="${user.avatar_url}" alt="${user.login}">
                <h3>${user.login}</h3>
            </div>
        `;
  });

  frontend += `</body></html>`;

  res.end(frontend);
});

server.listen(port, () => {
  console.log("Server is listening on port" + port);
});

//location ghaziabad
// import http from 'http'
// import axios from 'axios'
// const PORT = 3000;
// const server = http.createServer(async (req, res) => {
//   res.writeHead(200, { "content-type": "text/html" });
//   // const pdata = await fetch("https://dummyjson.com/products")
//   // const data = await pdata.json();
//   // res.end(JSON.stringify(data));

//   //https://api.github.com/search/users?q=location:ghaziabad
//   const pdata = await axios.get("https://api.github.com/search/users", {          //SEARCH
//     params: {
//       q: "location:ghaziabad"                                                     ///LOCATION
//     }
//   });
//   const newdata = pdata.data.items;

//   let frontend = <html><head></head><body>
//   newdata.forEach((product) => {
//     frontend += <div><img src="${product.avatar_url}"></div>
//   });
//   frontend += </body></html>
//   res.end(frontend);
// });

// server.listen(PORT, () => {
//   console.log(Server is running on port ${PORT});
// });
