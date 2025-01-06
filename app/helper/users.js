import Users from "../models/userSchema";

import mongoose from "mongoose";
//Creating a connection:

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "Projectify",
    });

     const user= await  Users.create({

        name:'Faizan',
        email:'faizanearmaan3@gmail.com',
        age:21,

    })

    console.log('New user Created')

    console.log("DB Connected");
    console.log(connection);
  } catch (error) {
    console.log("failed to Connect With MongoDb");
    console.log(error);
  }
};
