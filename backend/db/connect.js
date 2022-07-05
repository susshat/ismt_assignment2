const mongoose =require("mongoose") ;

function connect() {
  const dbUri = process.env.CONNECTION_URI ?? "";

  return mongoose.connect(dbUri);
}

module.exports = connect;
