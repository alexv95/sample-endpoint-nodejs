


const UserSchema = require("./schema");

const ObjectId = require('mongodb').ObjectID; 
class User{

    async newUser(user)
    {

        const addUser = new UserSchema({ firstname:user.firstname, lastname:user.lastname, email:user.email });

        await addUser.save(addUser );
    }
    
    async getUserByEmail(email) {
   
        const user = await UserSchema.findOne({ "email":email});
        return user;
    }
    async modifyUserById(email, params) {
      
    }
}

let user = new User();
module.exports = {
    user
};