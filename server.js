const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const listuser = require('./controllers/listuser');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

// Connect Database - Postgres

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1", // localhost
    user: "datle",
    password: "",
    database: "smart-brain"
  }
});

// Nodejs MiddleWare

const app = express();
app.use(bodyParser.json());
app.use(cors());

// const database = {
//   users: [
//     {
//       id: "123",
//       name: "John",
//       email: "john@gmail.com",
//       password: "cookies",
//       entries: 0,
//       joined: new Date()
//     },
//     {
//       id: "124",
//       name: "sally",
//       email: "sally@gmail.com",
//       password: "bananas",
//       entries: 0,
//       joined: new Date()
//     }
//   ]
// };

app.get("/", (req, res) => { listuser.handleListuser(req, res, db) });

app.post("/signin", (req, res) => { signin.handleSignin(req, res, db, bcrypt) });

app.post("/register", (req, res) => { register.handleRegister(req, res, db, bcrypt) });

app.get("/profile/:id", (req, res) => { profile.handleProfile(req, res,db) });

app.put("/image", (req, res) => { image.handleImage(req, res, db) });

app.post("/imageUrl", (req, res) => { image.handleApiCall(req, res) });

app.listen(3000, () => {
  console.log("app is running on port 3000");
})

/*
/signin --> POST = success / fail
/register -->  POST = {user}
/profile/:userId --> GET = {user}
/image --> PUT --> {user}
*/
