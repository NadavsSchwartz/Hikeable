import express from "express";
import { protect, restrictTo } from "../controllers/authController.js";
import { getCheckoutSession } from "../controllers/bookingController.js";
// import { updateOne } from "../controllers/handlerFactory.js";

const router = express.Router();

router.get("/checkout-session/:tourID", protect, getCheckoutSession);

export default router;
