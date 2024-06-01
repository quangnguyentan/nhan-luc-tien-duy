// import { verifiToken } from "../middlewares/";
import { isAdmin, verifyToken } from "../middlewares/verifyToken";
import * as streamController from "../controller/stream";
const router = require("express").Router();
router.get("/",  streamController.getAllStream)
router.get("/:id",  streamController.getStreamById);


module.exports = router;
