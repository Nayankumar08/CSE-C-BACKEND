// const http = require("http");
// const users = [
//   {
//     id: 1,
//     name: "navneet",
//     email: "nknkumar1501@gmail.com",
//   },
//   {
//     id: 2,
//     name: "nayan",
//     email: "nknkumar1502@gmail.com",
//   },
//   {
//     id: 3,
//     name: "priya",
//     email: "nknkumar1503@gmail.com",
//   },
// ];
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "application/json" });
//   res.end(JSON.stringify(users[0]));
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });

const http = require("http");
const users = [
  {
    id: 1,
    name: "navneet",
    email: "nknkumar1501@gmail.com",
  },
  {
    id: 2,
    name: "nayan",
    email: "nknkumar1502@gmail.com",
  },
  {
    id: 3,
    name: "priya",
    email: "nknkumar1503@gmail.com",
  },
];
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  //   res.end(JSON.stringify(users[0]));
  const namedata = users.map((user) => {
    return user.name;
  });
  res.end(JSON.stringify(namedata));
});

const port = 3000;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
