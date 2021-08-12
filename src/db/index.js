/*const { MongoClient } = require("mongodb");

async function dbConnection() {
    const uri = process.env.DB_URI;

    const client = new MongoClient(uri);
    try {
        await client.connect();
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}


module.exports = {dbConnection};*/
const mongoose = require("mongoose");


const dbConnection = async () => {
    try {

        await mongoose.connect( process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("Connected to db")
    }
    catch {
        throw new Error("Error connecting to db");
    }

};

module.exports = {dbConnection};