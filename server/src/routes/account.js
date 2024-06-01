// import { verifiToken } from "../middlewares/";
import { isAdmin, verifyToken } from "../middlewares/verifyToken";
import * as accountController from "../controller/account";
const router = require("express").Router();
router.get("/",  accountController.getAllAccount);
router.get("/:id",  accountController.getAccountById);


module.exports = router;
