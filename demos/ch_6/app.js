
const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

app.use(express.static('./public'),);
// * used like that to be write url as ..../assets/html/home.html 
 //app.use('/assets', express.static( 'public'),);

 // & My Own Middleware 'Custom middleware'
 app.use((req, res, next)=>{
  console.log('logging...');
  next();
 })
 app.get("/", (req, res) => {
  console.log("request received");
  res.sendFile(path.join(__dirname, "./public/user_form.html"));
});
app.listen(port, () => {
    console.log(`Server now is listening on port ${port}`);
  });