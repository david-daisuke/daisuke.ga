const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

//staticで指定しないと、cssが読み込まれないのでpulic 配下にstyle.cssを入れておく
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/",function(req,res){

      var firstName = req.body.fName;
      var lastName = req.body.lName;
      var email = req.body.email;
      var data = {
        members:[
          {
            email_address: email,
            status: "subscribed",
            merge_fields: {
              FNAME: firstName,
              LNAME: lastName
            }
          }
        ]
      };

      var jsonData = JSON.stringify(data);

      var options  = {
        url: "https://us20.api.mailchimp.com/3.0/lists/2f2d2a4d4d",
        method: "POST",
        headers:{
          "Authorization": "dkawanam 11f414e91508424e88e80a8d888dba5e-us20"
        },
        body: jsonData
      };

      request(options, function (error ,response ,body){
        if(error) {
          res.sendFile(__dirname + "/failure.html");
        } else{
          if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
          } else {
            res.sendFile(__dirname + "/failure.html");
          }
        }
      });
});

app.post("/failure",function (req,res){
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is   running on port 3000");
});





// API    11f414e91508424e88e80a8d888dba5e-us20
// list  ID  2f2d2a4d4d
// https://<dc>.api.mailchimp.com/3.0/lists
