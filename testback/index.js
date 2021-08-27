const express = require("express");
const app = express();

const port = 3000

app.get('/login',(req, res) =>{
  res.send("User is singed out");
})
app.get('/hitesh',(req, res)=>{
  res.send("Hitesh Uses Instagram");
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})