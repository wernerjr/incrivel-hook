const app = require("./app");

var port = process.env.PORT || 8080;

app.listen(port,function() {
  console.log(`app running on port ${port}`); });