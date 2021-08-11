
const express = require('express');
const cors = require('cors');
const { dbConnection } = require("../db/index");
class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.userPath = "/api/user";

        //db
        this.dbConnect();
        this.middlewares();
        this.routes();
    }

    async dbConnect(){
        await dbConnection();
    }

    middlewares() {
        
        this.app.use(cors());
        this.app.use(express.json());
        
        
    }


    routes() {
        
        this.app.use(this.userPath, require('../routes/UserRoutes/index'));
    }


    listen() {
        
        this.app.listen(this.port, () => {
        console.log("Estoy escuchando el puerto :",this.port);
        });
    }
}



module.exports = Server;