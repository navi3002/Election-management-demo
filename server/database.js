const Cloudant = require("@cloudant/cloudant");
const url =
  "https://05025f1a-856b-47a0-aadb-52e737a386f3-bluemix.cloudantnosqldb.appdomain.cloud ";
const username = "apikey-v2-1kdtmo28t5uulevcbb5m8mifmj5bd962vbuc18qwa0m4";
const password = "3589b77ff4cc367d60ae67e1f7dada03";

const cloudant = Cloudant({ url: url, username: username, password: password });

let get = function (adminData, dbName) {
  return cloudant.use(dbName).find(adminData);
};
let getId = function (id, dbName) {
  return cloudant.use(dbName).get(id);
};
let create = function (id, dbName) {
  return cloudant.use(dbName).insert(id);
};

let del_id = function (id, id1, dbName) {
  return cloudant.use(dbName).destroy(id, id1);
};

let insert = function (paramsValue) {
  console.log(paramsValue);
  return cloudant.use("election").insert(paramsValue);
};

let find = function (id, dbName) {
  return cloudant.use(dbName).find(id);
};
module.exports = { get, getId, insert, del_id, find };
