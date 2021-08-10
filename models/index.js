
const express = require('express');
const cors = require('cors');

class Server{

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.routes();
    }
    middlewares() {
        
        this.app.use(cors());
    }


    routes() {
        
        this.app.get('/', (req, res) => {
            res.send({ hi: "there" });
        });
    }


    listen() {
        
        this.app.listen(this.port, () => {
        console.log("Estoy escuchando el puerto :",this.port);
        });
    }
}



module.exports = Server;