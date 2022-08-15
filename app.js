const express = require ('express');
const app = express();/*  funcion de alto nivel */
const path = require("path");
const port = 3000;


app.get("/",(req,res)=>res.sendFile(path.resolve(__dirname,"views","home.html")));
app.get("/register",(req,res)=>res.sendFile(path.resolve(__dirname,"views","register.html")));
app.get("/login",(req,res)=>res.sendFile(path.resolve(__dirname,"views","login.html")));

app.use(express.static(path.join(__dirname,"public")));

app.listen(port, ()=> console.log(`Server rise in http://localhost:${port}`))