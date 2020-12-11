const router = require("express").Router();
const controller = require("./users.controller");

router.post("/register" , controller.createAcc);
router.get("/activeUsers" , controller.activeUsers);
router.get("/citiesList" , controller.citiesList);
router.get("/datesList" , controller.datesList);

module.exports = router;