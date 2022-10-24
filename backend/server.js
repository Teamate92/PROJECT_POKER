const express=require("express");
const cors = require("cors");
const fs = require("fs");

// Définition paramètres serveur
const hostname ='localhost';
const port = 3000;

// Création de l'app
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Démarrage du serveur
app.listen(port, () => console.log("Server Running on port 3000..."));

// REQUETE GET SONDAGES
const pollData = require("./data.json");
app.get("/poll", function (req, res) {
  res.send(pollData);
});

// REQUETE POST SONDAGES
app.post("/poll", function (req, res) {  
    if (req.body) {
      fs.writeFileSync("data.json", JSON.stringify(req.body));
      res.send({
        message: "Data Saved",
      });
    } else {
      res.status(400).send({
        message: "Error No Data",
      });
    }
  });

// REQUETE GET STRUCTURE
const structureData = require("./structure.json");
  app.get("/structure", function (req, res) {
    res.send(structureData);
  });
  
// REQUETE POST STRUCTURE
  app.post("/structure", function (req, res) {  
    if (req.body) {
      fs.writeFileSync("structure.json", JSON.stringify(req.body));
      res.send({
        message: "Data Saved",
      });
    } else {
      res.status(400).send({
        message: "Error No Data",
      });
    }
  });

  // REQUETE GET DECOMPTE
  const dateData = require("./date.json");
  app.get('/date', function (req, res) {
    res.send(dateData);
  });




  /////partie connection mongoose à la base de donnée mongo
const mongoose = require('mongoose');
const app2 = express();
const UsersModel = require("./models/users.models");

app2.use(express.json());
app2.use(cors());

//URL Mongo Atlas
mongoose.connect("mongodb+srv://ecepoker:ece2021@crud.fnkos.mongodb.net/users?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
}
);

app2.get("/membres", async(req,res) => {
  UsersModel.find({},(err,result) => {
    if(err) {
      res.send(err);
    }
    res.send(result);
  })
})

app2.post("/inscription", async (req,res) => {
  const firstname=req.body.firstname;
  const lastname=req.body.lastname;
  const email=req.body.email;
  const password=req.body.password;
  const users = new UsersModel({firstname:firstname,lastname:lastname,email: email, password: password});
  try{
    await users.save();
    res.send("inserted data");
  }catch(err){
    console.log(err);
  }
});

app2.put("/maj", async (req,res) => {
  const newEmail = req.body.newEmail;
  const id = req.body.id;
  try{
    await UsersModel.findById(id,(err,majMembre) => {
      majMembre.email=newEmail;
      majMembre.save();
      res.send("mise à jour");
    })
  }catch(err){
    console.log(err);
  }
});

app2.delete("/suppression/:id", async(req,res) => {
  const id = req.params.id;
  await UsersModel.findByIdAndRemove(id).exec();
  res.send('supprimé');
})

app2.listen(3001, () => {
  console.log("Server running on port 3001...");
});
