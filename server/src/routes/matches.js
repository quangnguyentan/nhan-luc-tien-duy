// import { verifiToken } from "../middlewares/";
import { isAdmin, verifyToken } from "../middlewares/verifyToken";
import * as matchesController from "../controller/matches";
const router = require("express").Router();
router.get("/",  matchesController.getAllMatches);
router.get("/:idMatches",  matchesController.getMatchesById);


module.exports = router;
