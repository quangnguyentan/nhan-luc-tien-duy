import express from "express";
const app = express();
require("dotenv").config();
import cors from "cors";
const PORT = 8080;
import initRoutes from "./src/routes";
import connectDB from "./src/config/connectDB";
require("./src/passport/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//     methods: ["GET", "PUT", "POST", "DELETE"],
//     credentials: true,
//   })
// );
app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);
    next();
});
initRoutes(app);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
