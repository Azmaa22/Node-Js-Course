const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  if (req.url == "/") {
    res.write("This is my response from server on the port 8000");
    res.end();
  } else if (req.url == "/home") {
    res.write("This is my Home response from server on the port 8000");
    res.end();
  }else{
    res.write('This is my anonymous response from server on the port 8000');
   res.end();
  }
});
server.listen(8000, () => {
  console.log("now , your server is listening on port 8000 .... !!");
});
