const fspromimse = require("fs/promises");
//const fspromimse = require("fs").promises;
const read = () => {
  try {
    const data = fspromimse.readFile("./data.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error.msg);
  }
};
read();
console.log("1");
console.log("2");
console.log("3");
console.log("4");

// const fspromimse = require("fs/promises");
// //const fspromimse = require("fs").promises;
// const write = async () => {
//   await fspromimse.writeFile("./data2.txt", "my name is Nayan", "utf-8");
// };
// write();
