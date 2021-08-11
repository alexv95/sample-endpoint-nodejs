const { Router } = require('express');
const { check } = require('express-validator');

const { newUser,getUserById  } = require('../../controller/UserController/index');

const router = Router();



//router.get("/", getUsers);

router.post("/", [], newUser);

router.get("/:id",getUserById )
//router.put("/:id", [], modifyUser);


module.exports = router;
