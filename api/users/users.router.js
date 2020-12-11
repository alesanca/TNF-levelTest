const router = require("express").Router();
const controller = require("./users.controller");

router.post("/register" , controller.createAcc);
router.get("/activeUsers" , controller.activeUsers);
router.get("/citiesList" , controller.citiesList);

module.exports = router;