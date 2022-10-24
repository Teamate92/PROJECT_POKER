const mongoose = require('mongoose');


//Definition du schema pour le user model
var UsersSchema = new mongoose.Schema({
    id: String,
    firstname: String,
    lastname: String,
    email: {
      type : String,
      required : true,
    },
    password: {
      type : String,
      required : true,
    },

  });
  
  //creation du user model
  const Users = mongoose.model("users", UsersSchema);
  module.exports = Users;
