const { MongoClient } = require("mongodb");

async function main() {
    const uri = process.env.URI;

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

