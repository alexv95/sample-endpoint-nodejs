


const UserSchema = require("./schema");

const ObjectId = require('mongodb').ObjectID; 
class User{

    async newUser(user)
    {

        const addUser = new UserSchema({ firstname:user.firstname, lastname:user.lastname, email:user.email });

        console.log(addUser);

        await addUser.save(addUser );
        //const res = UserSchema.insertOne(user);

        //client.db.collection('Test').insertOne(user); 
    }
    
    async getUserById(id) {
        console.log("estoy aquí con el id:",id);
        const user = await UserSchema.findOne({ email: id });
        console.log({
            user
        })
        return user;
    }
    async modifyUserById(id, params) {
        client.db.collection('Test').updateOne(id,params);
    }
}

let user = new User();
module.exports = {
    user
};