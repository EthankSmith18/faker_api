const express = require("express");
const app = express();

const { createUser, createCompany, newuser, newcompany } = require('./models/user.model');


app.get('/api/users/new', (req, res) =>{
  res.status(200).json(newuser);
});

app.get('/api/companies/new', (req, res) =>{
  res.status(200).json(newcompany);
});

app.get('/api/user/company', (req, res) =>{
  const combo = {...newcompany,...newuser}
  res.status(200).json(combo);
});

const PORT = 3000;

app.listen(3000, () => {
  console.log(`listening on port ${PORT}`)
});


