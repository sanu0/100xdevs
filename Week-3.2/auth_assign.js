const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array

  for(let i =0;i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
      return true;
    }
  }
  return false;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    let itemToBeSent = [];
    for(let i=0;i<ALL_USERS.length;i++){
      if(ALL_USERS[i].username != username){
        itemToBeSent.push(ALL_USERS[i].username);
      }
    }
    res.status(200).json(itemToBeSent);
  }
  catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)

// so basically in this we are signing in with giving our username and password
// and then server is returning us the jwt which we later use to let user access the 
//contents of the site by verifying it!