// import { verifiToken } from "../middlewares/";
import { isAdmin, verifyToken } from "../middlewares/verifyToken";
import * as adsController from "../controller/ads";
const router = require("express").Router();
router.get("/",  adsController.getAllADS);
router.get("/:id",  adsController.getADSById);


module.exports = router;
