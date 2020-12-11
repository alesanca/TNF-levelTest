const router = require("express").Router();
const controller = require("./users.controller");

router.post("/register" , controller.createAcc);
router.get("/activeUsers" , controller.activeUsers);

module.exports = router;