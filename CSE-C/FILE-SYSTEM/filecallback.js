const fscallback = require("fs");
const read = () => {
  fscallback.realFile("./data.txt", "utf-8", (error, data) => {
    if (error) {
      console.error(error.message);
    } else {
      console.log(data);
    }
  });
};
read();
console.log("first");
