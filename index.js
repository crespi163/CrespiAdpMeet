var express = require("express");
var bodyparser=require("body-parser");
var apiServer = express();
apiServer.use(express.urlencoded({ extended: false }))
var fs = require("fs"); 
var port = 3000;
var host = "localhost";



apiServer.post("/login", (request, response) => {
    var user = request.body.user;
    var password = request.body.password;
    fs.readFile("utenti.json", (err, jsonString) => {
        if (err) {
            console.log("errore lettura del file: "+ err);
            return;
        }
        var utenti = JSON.parse(jsonString)
        if (utenti["user"] == user && utenti["password"] == password) {
          response.status(200)
          response.send("sei entrato")
        } else {
            response.status(500)
            response.send("ERRORE")
            console.log("fallito")
        }
    });
})


apiServer.delete("/delete", (request, response)=>{
    
    
    fs.readFile("utenti.json", (err, jsonString) => {
        if (err) {
            console.log("errore lettura del file: "+ err);
            return;
        }
        var utenti = JSON.parse(jsonString);
       if(utenti["user"]==request.body.user){
        
       }

    });
})

apiServer.listen(port, host, () => console.info("server running at: http://%s:%d", host, port))