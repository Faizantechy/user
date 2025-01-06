import Users from "../models/userSchema";

const { Mongoose, default: mongoose } = require("mongoose");

//Creating a connection:

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "Projectify",
    });

    const user= new Users({

        name:'Faizan',
        email:'faizanearmaan3@gmail.com',
        age:21,

    })

    user.save()
    console.log('New user Created')
    
    console.log("DB Connected");
    console.log(connection);
  } catch (error) {
    console.log("failed to Connect With MongoDb");
    console.log(error);
  }
};
