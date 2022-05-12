const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
const port = 8000;
var patient = {};
const file = require("fs");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
const { response } = require("express");
app.use(connection.static("public"));
app.get("/dashboard", function (request, response) {
  response.json({ name: "Dashboard Works" });
});
app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on http://localhost:${port}`);
});
const Cloudant = require("@cloudant/cloudant");
var url =
  "https://05025f1a-856b-47a0-aadb-52e737a386f3-bluemix.cloudantnosqldb.appdomain.cloud ";
var username = "apikey-v2-1kdtmo28t5uulevcbb5m8mifmj5bd962vbuc18qwa0m4";
var password = "3589b77ff4cc367d60ae67e1f7dada03";

var cloudant = Cloudant({ url: url, username: username, password: password });

cloudant.db
  .create("apzal12")
  .then(() =>
    cloudant
      .use("apzal")
      .insert({ happy: true }, "rabbit")
      .then((data) => {
        console.log(data);
      })
  )
  .catch((err) => {
    console.log(err);
  });
