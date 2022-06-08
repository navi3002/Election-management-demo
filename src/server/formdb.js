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
const validation = require("./validations/managecitizenpage.schema");
const validation1 = require("./validations/managepartypage.schema");
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.post("/adminsignuplogin", (request, response) => {
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

app.post("/citizensignupdata", (request, response) => {
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

app.post("/citizenuserdata", (request, response) => {
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
  const value = validation.managecitizenschema.validate(request.body);
  console.log("start");
  if (value.error) {
    console.log("success");

    response.json({
      success: 0,
      message: value.error.details[0].message,
    });
  } else {
    dbconnection.insert(object).then((_res) => {
      if (_res) {
        response.send(_res);
      } else {
        response.send("error");
      }
    });
  }
  console.log("ebd");
});

app.post("/partydetailsdata", (request, response) => {
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
    boothid: request.body.boothid,
    boothno: request.body.boothno,
    candidatecity1: request.body.candidatecity1,
    candidatecity2: request.body.candidatecity2,
    candidatecity3: request.body.candidatecity3,
    candidatecity4: request.body.candidatecity4,
    candidatecity5: request.body.candidatecity5,
    type: "boothdata",
  };
  const value = validation1.managepartyschema.validate(request.body);
  dbconnection.insert(object).then((_result) => {
    if (_result) {
      response.send(_result);
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
  dbconnection.get(data, "election").then((result) => {
    if (result) {
      response.send(result);
    } else {
      response.send("error");
    }
  });
});
app.get("/citizenuserloginiall/:id", (request, response) => {
  dbconnection.getId(request.params.id, "election").then((data) => {
    if (data) {
      response.send(data);
    } else {
      response.send("error");
    }
  });
});

app.get("/admingetUserId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "election").then((_data) => {
    if (_data) {
      response.send(_data);
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
  dbconnection.get(data, "election").then((_dataall) => {
    if (_dataall) {
      response.send(_dataall);
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
  dbconnection.get(data, "election").then((alldata) => {
    if (alldata) {
      response.send(alldata);
    } else {
      response.send("error");
    }
  });
});

app.delete("/clearcitizendetails/:id/:id1", (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, "election")
    .then((_alldata) => {
      if (_alldata) {
        response.send(_alldata);
      } else {
        response.send("error");
      }
    });
});

app.get("/getpartydetailsdata", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      type: "boothdata",
    },
  };
  dbconnection.get(data, "election").then((newdata) => {
    if (newdata) {
      response.send(newdata);
    } else {
      response.send("error");
    }
  });
});

app.get("/getpartdetailsdatabooth1", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      boothno: "Booth 1",
      type: "boothdata",
    },
  };
  dbconnection.get(data, "election").then((_newdata) => {
    if (_newdata) {
      response.send(_newdata);
    } else {
      response.send("error");
    }
  });
});

app.get("/getpartdetailsdatabooth2", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      boothno: "Booth 2",
      type: "boothdata",
    },
  };
  dbconnection.get(data, "election").then((dataone) => {
    if (dataone) {
      response.send(dataone);
    } else {
      response.send("error");
    }
  });
});

app.get("/getpartdetailsdatabooth3", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      boothno: "Booth 3",
      type: "boothdata",
    },
  };
  dbconnection.get(data, "election").then((_dataone) => {
    if (_dataone) {
      response.send(_dataone);
    } else {
      response.send("error");
    }
  });
});

app.delete("/clearpartydetails/:id/:id1", (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, "election")
    .then((datatwo) => {
      if (datatwo) {
        response.send(datatwo);
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
  dbconnection.get(data, "election").then((_datatwo) => {
    if (_datatwo) {
      response.send(_datatwo);
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

app.get("/citizenloginform", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      type: "citizenDataDetails",
    },
  };
  dbconnection.get(data, "election").then((_datathree) => {
    if (_datathree) {
      response.send(_datathree);
    } else {
      response.send("error");
    }
  });
});

app.get("/getboothidChange/:id", (request, response) => {
  console.log(request.params.id);
  const name = request.params.id;
  var getboothidall = {
    selector: {
      boothid: request.params.id,
      type: "boothdata",
    },
  };
  console.log(getboothidall);
  dbconnection.find(getboothidall, "election").then((datathree) => {
    if (datathree) {
      console.log(datathree);
      response.send(datathree);
    } else {
      console.log(datathree);
      response.send("error");
    }
  });
});

app.get("/getboothidChange1/:id", (request, response) => {
  console.log(request.params.id);
  const name = request.params.id;
  var getboothidall = {
    selector: {
      _id: request.params.id,
      type: "boothdata",
    },
  };
  console.log(getboothidall);
  dbconnection.find(getboothidall, "election").then((datafour) => {
    if (datafour) {
      console.log(datafour);
      response.send(datafour);
    } else {
      console.log(datafour);
      response.send("error");
    }
  });
});

app.post("/postVote", (request, response) => {
  console.log(request);
  var object = {
    canditatename: request.body.canditatename,
    partyname: request.body.partyname,
    status: request.body.status,
    boothno: request.body.boothno,
    type: request.body.type,
  };
  dbconnection.insert(object).then((_datafour) => {
    if (_datafour) {
      response.send(_datafour);
    } else {
      response.send("error");
    }
  });
});

app.get("/votedDataList", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      status: "voted",
      boothno: request.body.boothno,
      type: "votedList",
    },
  };
  dbconnection.get(data, "election").then((_datafive) => {
    if (_datafive) {
      response.send(_datafive);
    } else {
      response.send("error");
    }
  });
});
