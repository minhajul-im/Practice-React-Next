import mongoose from "mongoose";

export async function connect() {
  console.log("connected");
  try {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected successfully!");
    });

    connection.on("error", (err) => {
      console.log("MONGODB CONNECTION ERROR!" + err);
      process.exit();
    });
  } catch (error) {
    console.log("SOMETHING GOES WRONG FROM MONGODB CATCH ERROR!");
    console.log(error);
  }
}
