const { readFile } = require("fs");

const util = require("util");

const readFilePromise = util.promisify(readFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = () => {
//     return new Promise((resolve, reject) => {
//       readFile("./content/first.txt", "utf8", (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   };

// getText()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));
