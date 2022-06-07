const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.use(express.static("public"));
const port = 8000;
const login = {};
const file = require("fs");
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

app.post("/adminsignuplogin", (request, response) => {
  console.log("hai");
  console.log(request);
  let object = {
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
  let object = {
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
  let object = {
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
  dbconnection.insert(object).then((userdata_res) => {
    if (userdata_res) {
      response.send(userdata_res);
    } else {
      response.send("error");
    }
  });
});

app.post("/partydetailsdata", (request, response) => {
  console.log(request);
  let object = {
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
  dbconnection.insert(object).then((party_res) => {
    if (party_res) {
      response.send(party_res);
    } else {
      response.send("error");
    }
  });
});

app.get("/citizenuserlogin", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: "usersignup",
    },
  };
  dbconnection.get(data, "election").then((citizenlogin_res) => {
    if (citizenlogin_res) {
      response.send(citizenlogin_res);
    } else {
      response.send("error");
    }
  });
});
app.get("/citizenuserloginiall/:id", (request, response) => {
  dbconnection.getId(request.params.id, "election").then((citizenuser_res) => {
    if (citizenuser_res) {
      response.send(citizenuser_res);
    } else {
      response.send("error");
    }
  });
});

app.get("/admingetUserId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "election").then((admin_res) => {
    if (admin_res) {
      response.send(admin_res);
    } else {
      response.send("error");
    }
  });
});

app.get("/adminuserlogin", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: "admin",
    },
  };
  dbconnection.get(data, "election").then((adminuserlogin_res) => {
    if (adminuserlogin_res) {
      response.send(adminuserlogin_res);
    } else {
      response.send("error");
    }
  });
});

app.get("/getcitizendetailsdata", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: "citizenuserData",
    },
  };
  dbconnection.get(data, "election").then((getcitizen_res) => {
    if (getcitizen_res) {
      response.send(getcitizen_res);
    } else {
      response.send("error");
    }
  });
});

app.delete("/clearcitizendetails/:id/:id1", (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, "election")
    .then((clearciti_res) => {
      if (clearciti_res) {
        response.send(clearciti_res);
      } else {
        response.send("error");
      }
    });
});

app.get("/getpartydetailsdata", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: "boothdata",
    },
  };
  dbconnection.get(data, "election").then((details_res) => {
    if (details_res) {
      response.send(details_res);
    } else {
      response.send("error");
    }
  });
});

app.get("/getpartdetailsdatabooth1", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      boothno: "Booth 1",
      type: "boothdata",
    },
  };
  dbconnection.get(data, "election").then((getpaty_res) => {
    if (getpaty_res) {
      response.send(getpaty_res);
    } else {
      response.send("error");
    }
  });
});

app.get("/getpartdetailsdatabooth2", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      boothno: "Booth 2",
      type: "boothdata",
    },
  };
  dbconnection.get(data, "election").then((get_res) => {
    if (get_res) {
      response.send(get_res);
    } else {
      response.send("error");
    }
  });
});

app.get("/getpartdetailsdatabooth3", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      boothno: "Booth 3",
      type: "boothdata",
    },
  };
  dbconnection.get(data, "election").then((booth3_res) => {
    if (booth3_res) {
      response.send(booth3_res);
    } else {
      response.send("error");
    }
  });
});

app.delete("/clearpartydetails/:id/:id1", (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, "election")
    .then((clearparty_res) => {
      if (clearparty_res) {
        response.send(clearparty_res);
      } else {
        response.send("error");
      }
    });
});

app.get("/votecandidatedetailsforvote", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: "boothdata",
    },
  };
  dbconnection.get(data, "election").then((vote_res) => {
    if (vote_res) {
      response.send(vote_res);
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
  let data = {
    selector: {
      type: "citizenDataDetails",
    },
  };
  dbconnection.get(data, "election").then((citi_res) => {
    if (citi_res) {
      response.send(citi_res);
    } else {
      response.send("error");
    }
  });
});

app.get("/getboothidChange/:id", (request, response) => {
  console.log(request.params.id);
  const name = request.params.id;
  let getboothidall = {
    selector: {
      boothid: request.params.id,
      type: "boothdata",
    },
  };
  console.log(getboothidall);
  dbconnection.find(getboothidall, "election").then((res) => {
    if (res) {
      console.log(res);
      response.send(res);
    } else {
      console.log(res);
      response.send("error");
    }
  });
});
app.get("/getboothidChange1/:id", (request, response) => {
  console.log(request.params.id);
  const name = request.params.id;
  let getboothidall = {
    selector: {
      _id: request.params.id,
      type: "boothdata",
    },
  };
  console.log(getboothidall);
  dbconnection.find(getboothidall, "election").then((getbooth1_res) => {
    if (resgetbooth1_res) {
      response.send(getbooth1_res);
    } else {
      response.send("error");
    }
  });
});

app.post("/postVote", (request, response) => {
  console.log(request);
  let object = {
    canditatename: request.body.canditatename,
    partyname: request.body.partyname,
    status: request.body.status,
    boothno: request.body.boothno,
    type: request.body.type,
  };
  dbconnection.insert(object).then((postvote_res) => {
    if (postvote_res) {
      response.send(postvote_res);
    } else {
      response.send("error");
    }
  });
});

app.get("/votedDataList", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      status: "voted",
      boothno: request.body.boothno,
      type: "votedList",
    },
  };
  dbconnection.get(data, "election").then((voted_res) => {
    if (voted_res) {
      response.send(voted_res);
    } else {
      response.send("error");
    }
  });
});
