
import { client } from '../index.js';

class User{

    async newUser(user)
    {
        client.db.collection('Test').insertOne(user); 
    }
    
    async getUserById(id) {
        client.db.collection('Test').findOne(id);
    }
    async modifyUserById(id, params) {
        client.db.collection('Test').updateOne(id,params);
    }
}

let user = new User();
export default user;