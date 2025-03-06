import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send(users);
});
app.use(express.json());
app.post("/", (req, res) => {
  const bodydata = req.body;
  console.log(bodydata);
  res.send("data is received");
});

//CREATE
app.post("/api/users", (req, res) => {
  const bodydata = req.body;
  users.push(bodydata);
  res.send("new users created");
});

//UPDATE
app.patch("/api/updateusers/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const index = users.findIndex((user) => user.id == id);
  users[index].name = name;
  res.send("user is updae sucessfully");
});

//DELETE
app.delete("/api/deleteuser/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id == id);
  users.splice(index, 1);
  req.send("user is delete sucessfully");
});
app.listen(port, () => {
  console.log(`serve running at http://localhost:${port}`);
});

// import express from "express";
// const app = express();
// const port = 3000;
// app.listen(port, () => {
//   console.log;
//   `serve running at http://localhost:${port}`;
// });
