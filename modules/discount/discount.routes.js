import { Router } from "express";
import * as Discount from "./controllers/discount.controller.js";
const router = new Router();
router
  .route("/discount/create")
  .post(Discount.createDiscount);
router.route("/tour/").get(Discount.getListDiscount);
router.route("/tour/:id").get(Discount.getDiscountById);
router.route("/tour/:tour").get(Discount.getListDiscountByTour)
export default router;