const { user}  = require("../../business/User/index");

const { response, request } = require('express');
const { contextsKey } = require("express-validator/src/base");


const newUser = async (req = request, res = response) => {
    

    const { firstname, lastname, email } = req.body;
    console.log("estoy aquí");
    

    await user.newUser({ firstname, lastname, email });
    res.json({firstname});
}


const getUserById = (req = request, res = response) => {
    
    const { id } = req.params;
    console.log(id);
    console.log(user.getUserById(id));
    res.json();
}



module.exports =
{
    newUser,getUserById 
}