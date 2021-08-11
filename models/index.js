
const express = require('express');
const cors = require('cors');

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.userPath = "/api/user";
        this.middlewares();
        this.routes();
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