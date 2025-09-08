const users = require('../models/userModel');
var express = require("express");
var app = express();
const port = 3000;

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, 2000);
  });
}

app.get("/data", async function (req, res) {
  const data = await getUser();
  res.send(data);
});
app.listen(port, () => {
  console.log("servidor corriendo en el puerto " + port);
});
