const user = [
  { "username": "Ricardo Dominguez", "age": 20, "password": "passRic_1" },
  { "username": "Sofía Morales", "age": 24, "password": "s0f1aM0r!" },
  { "username": "Luis Fernández", "age": 38, "password": "luisF_pass" },
  { "username": "Mariana Gómez", "age": 21, "password": "mariana_21" },
  { "username": "Javier Pérez", "age": 45, "password": "j4v1erP3r3z" },
  { "username": "Camila Soto", "age": 32, "password": "soto_c4m1l4" },
  { "username": "Andrés Castro", "age": 26, "password": "andres_castro" },
  { "username": "Valeria Vargas", "age": 37, "password": "vvargas_pass" },
  { "username": "Sergio Ramos", "age": 30, "password": "s3rg10R4m0s" },
  { "username": "Gabriela Díaz", "age": 23, "password": "gabiD_23" },
];

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