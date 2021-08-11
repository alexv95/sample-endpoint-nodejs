const { Router } = require('express');
const { check } = require('express-validator');

const { newUser } = require('../../controller/UserController/index');

const router = Router();



//router.get("/", getUsers);

router.post("/", [], newUser);

//router.put("/:id", [], modifyUser);


module.exports = router;
