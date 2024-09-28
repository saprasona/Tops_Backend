const mongodb = require("mongodb");
const mongoClinet = mongodb.MongoClient;

const url =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1";

mongoClinet.connect(url).then((data) => {
  console.log("db connected");

  const db = data.db("tops");

//   db.createCollection("emp").then((result) => {
//     console.log("collection created...");
//   });

  // e1={name:"Sona",email:"sona@gmail.com",phone:9624285760,sal:15000}
  // db.collection("emp").insertOne(e1).then(result=>{
  //     console.log(result);
  // })

  // e1={name:"Alpesh",email:"alpesh@gmail.com",phone:9724285760,sal:15000}
  // e2={name:"Krunal",email:"krunal@gmail.com",phone:8845285760,sal:20000}
  // e3={name:"Kajal",email:"kajal@gmail.com",phone:8845855760,sal:18000}

  // db.collection("emp").insertMany([e1,e2,e3]).then(result=>{
  //     console.log(result);
  // })

  // db.collection("emp").find().toArray().then(result=>{
  //     console.log(result);
  // })

  // db.collection("emp").find({name:"Krunal"}).toArray().then(result=>{
  //     console.log(result);
  // })

  // db.collection("emp").findOne({name:"Sona"}).then(result=>{
  //         console.log(result);
  //     })

  // db.collection("emp").deleteOne({name:"Kajal"}).then(result=>{
  //     console.log(result);
  // })

  db.collection("emp").deleteMany({ name: "Kajal" }).then((result) => {
      console.log(result);
    });

  db.collection("emp").updateOne({name:""})










});
