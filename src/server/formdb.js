const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.use(express.static("public"));
const port = 8000;
const login = {};
const file = require("fs");
const { request } = require("http");
const { response } = require("express");
const { nextTick } = require("process");
const cors = require("cors");
const dbconnection = require("./database");
const winlogger = require("./logger/logger");
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.post("/adminsignuplogin", (request, response, next) => {
  console.log("hai");
  console.log(request);
  var object = {
    username: request.body.username,
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    email: request.body.email,
    password: request.body.password,
    confirmpassword: request.body.confirmpassword,
    type: "admin",
  };

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

  console.log("Data added");
});

app.post("/citizensignupdata", (request, response, next) => {
  console.log(request);
  var object = {
    username: request.body.username,
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    email: request.body.email,
    password: request.body.password,
    confirmpassword: request.body.confirmpassword,
    type: "usersignup",
  };
  dbconnection.insert(object).then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.post("/citizenuserdata", (request, response, next) => {
  console.log(request);
  var object = {
    citizenname: request.body.citizenname,
    citizenemail: request.body.citizenemail,
    citizenadhaar: request.body.citizenadhaar,
    dob: request.body.dob,
    phonenumber: request.body.phonenumber,
    boothid: request.body.boothid,
    boothno: request.body.boothno,
    citizenadress: request.body.citizenadress,
    citizencity: request.body.citizencity,
    citizenstate: request.body.citizenstate,
    type: "citizenDataDetails",
  };
  dbconnection.insert(object).then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.post("/partydetailsdata", (request, response, next) => {
  console.log(request);
  var object = {
    partyname1: request.body.partyname1,
    partyname2: request.body.partyname2,
    partyname3: request.body.partyname3,
    partyname4: request.body.partyname4,
    partyname5: request.body.partyname5,
    candidatename1: request.body.candidatename1,
    candidatename2: request.body.candidatename2,
    candidatename3: request.body.candidatename3,
    candidatename4: request.body.candidatename4,
    candidatename5: request.body.candidatename5,
    candidatephoneno1: request.body.candidatephoneno1,
    candidatephoneno2: request.body.candidatephoneno2,
    candidatephoneno3: request.body.candidatephoneno3,
    candidatephoneno4: request.body.candidatephoneno4,
    candidatephoneno5: request.body.candidatephoneno5,
    booth: request.body.booth,
    candidatecity1: request.body.candidatecity1,
    candidatecity2: request.body.candidatecity2,
    candidatecity3: request.body.candidatecity3,
    candidatecity4: request.body.candidatecity4,
    candidatecity5: request.body.candidatecity5,
    type: "boothdata",
  };
  dbconnection.insert(object).then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.get("/citizenuserlogin", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      type: "usersignup",
    },
  };
  dbconnection.get(data, "election").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.get("/citizenuserloginiall/:id", (request, response) => {
  dbconnection.getId(request.params.id, "election").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.get("/admingetUserId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "election").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.get("/adminuserlogin", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      type: "admin",
    },
  };
  dbconnection.get(data, "election").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.get("/getcitizendetailsdata", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      type: "citizenuserData",
    },
  };
  dbconnection.get(data, "election").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.delete("/clearcitizendetails/:id/:id1", (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, "election")
    .then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
});

app.get("/getpartdetailsdata", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      type: "boothdata",
    },
  };
  dbconnection.get(data, "election").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.delete("/clearpartydetails/:id/:id1", (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, "election")
    .then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
});

app.get("/votecandidatedetailsforvote", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      type: "boothdata",
    },
  };
  dbconnection.get(data, "election").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  winlogger.info("SUCCESS", "Server is running!!!");
  console.log(`server is listening on http://localhost:${port}`);
});
