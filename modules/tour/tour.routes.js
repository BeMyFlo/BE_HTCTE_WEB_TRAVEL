import { Router } from "express";
import * as Tour from "./controllers/tour.controller.js";
import { upload } from "../../services/upload.js";

const router = new Router();
router
  .route("/tour/create")
  .post(upload.single("image"), Tour.createTour);
router.route("/tour/").get(Tour.getListTour);
router.route("/tour/:id").get(Tour.getTourById);

export default router;