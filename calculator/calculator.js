const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//絶対パスで sendFile するために__dirname と index.htmlを組み合わせて使う。
//例えば、同一フォルダ内にpath.jsがあるがこれをnode できどうすると
//  /Users/dkawanam/Projects/calculator と表示される。
app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
});

app.post(__dirname, function(req,res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;

  res.send("the result of the calculation is " + result );
});


app.listen(3000, function(){
  console.log("server is running on 3000");
});
