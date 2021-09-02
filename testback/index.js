const express = require("express");
const app = express();

const port = 8000

app.get('/login',(req, res) =>{
  res.send("Home Page");
});

const admin =(req,res )=>{
  return res.send("Home dash board");
};


const  isAdmin = (req,res , next)=>{
  console.log("IS Admin Is Running");
  next();
}
app.get("/admin", isloggedIn ,isAdmin,admin);

app.get('/hitesh',(req, res)=>{
  res.send("Hitesh Uses Instagram");
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})