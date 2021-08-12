const { user}  = require("../../business/User/index");

const { response, request } = require('express');
const { contextsKey } = require("express-validator/src/base");


const newUser = async (req = request, res = response) => {
    const { firstname, lastname, email } = req.body;
    
    const result = await user.newUser({ firstname, lastname, email });
    return res.json(result);




}


const getUserById =async (req = request, res = response) => {
    const { email } = req.params;
    return res.json(await user.getUserByEmail(email));

}



module.exports =
{
    newUser,getUserById 
}