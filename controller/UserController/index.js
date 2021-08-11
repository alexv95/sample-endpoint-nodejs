const { response, request } = require('express');


const newUser = async (req = request, res = response) => {
    

    const { name, mail } = req.body;
    console.log("estoy aquí");

    res.json({name});
}




module.exports =
{
    newUser,
}