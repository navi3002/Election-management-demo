const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.use(express.static("public"));
const port = 8000;
var login = {};
const file = require("fs");
const { request } = require("http");
const { response } = require("express");
const { nextTick } = require("process");
const cors = require("cors");
const dbconnection = require("./database");
// app.use(express.static("public"));
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
// var urlParser = bodyparser.urlencoded({ extended: false });
// app.get("/", function (request, response) {
//   var data = file.readFileSync("details.json");

//   var details = JSON.parse(data);
//   console.log("From get functin", details);
//   exports.dataset = details;

//   //   response.sendFile(`${__dirname}/`);
// });

app.post("/dashboard", (request, response, next) => {
  console.log("hai");
  console.log(request);
  var object = {
    username: request.body.username,
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    email: request.body.email,
    password: request.body.password,
    confirmpassword: request.body.confirmpassword,
  };

  //   var data = file.readFileSync("details.json");

  //   var details = JSON.parse(data);
  //   details.push(object);
  //   console.log(details);

  //   file.writeFile("details.json", JSON.stringify(details), (err) => {
  //     if (err) throw err;

  //     console.log("Data added successfully");
  //     details = JSON.parse(data);
  //   });
  // response.end(JSON.stringify(patient));
  dbconnection.insert(object).then(
    (res) => {
      console.log("data posted");
      response.send(res);
    },
    (rej) => {
      console.log("data cant posted");
      response.send(rej);
    }
  );
  //   response.redirect("..");
  console.log("Data added");
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
