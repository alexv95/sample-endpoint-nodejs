


const UserSchema = require("./schema");

const ObjectId = require('mongodb').ObjectID;


const { HTTPError } = require('../../utils/errorhandlers/index');
class User{

    async newUser(user)
    {
        
        if ((this.getUserByEmail(user.mail))==null) {
            const addUser = new UserSchema({ firstname:user.firstname, lastname:user.lastname, email:user.email });
            try {
                await addUser.save(addUser);
                return user;
            }
            catch {
                return this.dbError();
            }
            
        }
        else {
            return new HTTPError(400,"Username already exist");
        }
       
    }
    
    async getUserByEmail(email) {
        try {
            const user = await UserSchema.findOne({ "email":email});
            return user;
        }
        catch {
            return this.dbError();
        }
 
    }
    async modifyUserById(email, params) {
      
    }

    dbError() {
        return new HTTPError(500, "Database not available");
    }
}

let user = new User();
module.exports = {
    user
};