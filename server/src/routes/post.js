// import { verifiToken } from "../middlewares/";
import { isAdmin, verifyToken } from "../middlewares/verifyToken";
import * as postController from "../controller/post";
const router = require("express").Router();
router.get("/",  postController.getAllPost);
router.get("/:id",  postController.getPostsById);


module.exports = router;
