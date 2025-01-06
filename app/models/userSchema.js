const { Mongoose, default: mongoose } = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    default: "example@gmail.com",
  },
  age: Number,
});

const Users = mongoose.models.users || mongoose.model("users", usersSchema);

export default Users;
