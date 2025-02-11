const fs = require("fs");
// const data = fs.readFileSync("./data.txt", "utf-8");
// console.log(data.toString());

//TO WRITER DATA IN data.txt  (but overwrite)
fs.writeFileSync("./data1.txt", "heloo abes", "utf-8");
fs.writeFileSync("./data1.txt", "heloo abesec", "utf-8");

//FOR UPDATA WITHOUT OVERWRITE
fs.appendFileSync("./data1.txt", " student", "utf-8");

//FOR RENAME
// fs.renameSync("./data2.txt", "./data3.txt");

// //FOR DELETE
// fs.unlinkSync("./data3.txt");

//FOR REPLACE A STRING
const data = fs.readFileSync("./data.txt", "utf-8");
console.log("data");
if (data.match("H")) {
  console.log("File contain'H'");
  const constdata = data.replace("H", "ABES");
  fs.writeFileSync("./data.txt", constdata);
}
