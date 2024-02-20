require('dotenv').config()

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get('/twitter',(req,res)=>{
  res.send("tejasvimehta@twitter.com")
})

app.get('/login',(req,res)=>{
  res.send('<h1>Tejasvi login </h1>')
})

app.get('/youtube',(req,res)=>{
  res.send("<h2>Chai ho jae ek ek </h2>")
})

app.listen(process.env.PORT,()=>{
  console.log(`Example app listening on port ${process.env.port}`)
});
