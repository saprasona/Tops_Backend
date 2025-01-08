const fs = require("fs");

const createFile = (data) => {
  // console.log(data)
  // fs.writeFileSync()
  const allData = loadData();

  allData.push(data);

  const jasondata = JSON.stringify(allData);
  fs.writeFile("user.json", jasondata, (err, data) => {
    console.log("File Written...");
  });
};

const viewData = () =>{
    const data = loadData()
    console.log(data)
}

const loadData = () => {
  try {
    const data = fs.readFileSync("user.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

module.exports = { createFile,viewData };
