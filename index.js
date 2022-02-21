// Require fs module
const fs = require('fs')

// Create and Write File

fs.writeFile('./employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) =>{
  if (err) throw err;
  console.log("File Created and Wrotten");
})

// Read File
fs.readFile("./employees.json", "utf-8" ,(err,data) => {
  
  if (err) throw err;
  console.log(data);
  console.log("Reading file completed");

  // Update Value

  let json = JSON.parse(data);
  json.salary = 4000;

  fs.writeFile("./employees.json", JSON.stringify(json) ,"utf-8", (err) =>{
    if (err) throw err;
    console.log(JSON.stringify(json))
    console.log("Data updated");
  })

})

// Delete file

fs.unlink("./employees.json", (err) => {

  if (err) throw err;
  console.log("Data deleted");

})




