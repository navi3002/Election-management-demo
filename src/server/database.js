const Cloudant = require("@cloudant/cloudant");
var url =
  "https://05025f1a-856b-47a0-aadb-52e737a386f3-bluemix.cloudantnosqldb.appdomain.cloud ";
var username = "apikey-v2-1kdtmo28t5uulevcbb5m8mifmj5bd962vbuc18qwa0m4";
var password = "3589b77ff4cc367d60ae67e1f7dada03";

var cloudant = Cloudant({ url: url, username: username, password: password });

get = function (admindata, dbname) {
  return cloudant.use(dbname).find(admindata);
};
getId = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};
create = function (id, dbname) {
  return cloudant.use(dbname).insert(id);
};

del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};

insert = function (paramsvalue) {
  console.log(paramsvalue);
  return cloudant.use("election").insert(paramsvalue);
};
module.exports = { get, getId, insert, del_id };
