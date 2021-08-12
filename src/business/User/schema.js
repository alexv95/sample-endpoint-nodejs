const { model, Schema } =require("mongoose");
const UserSchema = new Schema(
{
    firstname: String,
    lastname: String,
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports=model("User",UserSchema);
