const { MongoClient } = require("mongodb");

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



export default client;