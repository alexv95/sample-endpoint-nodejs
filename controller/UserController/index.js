const { user}  = require("../../business/User/index");

const { response, request } = require('express');
const { contextsKey } = require("express-validator/src/base");


const newUser = async (req = request, res = response) => {
    const { firstname, lastname, email } = req.body;
    await user.newUser({ firstname, lastname, email });
    res.json({firstname});
}


const getUserById =async (req = request, res = response) => {
    const { email } = req.params;
    const response =await user.getUserByEmail(email);
    res.json(response);
}



module.exports =
{
    newUser,getUserById 
}