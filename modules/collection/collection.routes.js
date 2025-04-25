import { Router } from "express";
import * as Collection from "./controllers/collection.controller.js";
import { upload } from "../../services/upload.js";

const router = new Router();
router
  .route("/collection/create")
  .post(upload.single("image"), Collection.createCollection);
router.route("/collection/").get(Collection.getListCollection);
export default router;