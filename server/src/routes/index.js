
import postRouter from "./post";
import matchesRouter from "./matches";
import accountRouter from "./account";
import streamRouter from "./stream";
import adsRouter from "./ads";



const initRoutes = (app) => {

  app.use("/api/post", postRouter);
  app.use("/api/matches", matchesRouter);
  app.use("/api/account", accountRouter);
  app.use("/api/stream", streamRouter);
  app.use("/api/ads", adsRouter);



};
export default initRoutes;
