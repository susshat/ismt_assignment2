import mongoose from "mongoose";

function connect() {
  const dbUri = process.env.CONNECTION_URI ?? "";

  return mongoose.connect(dbUri);
}

export default connect;
