/* eslint-disable import/extensions */
import express from "express";
import { protect } from "../controllers/authController.js";
import {
  deleteBooking,
  getAllBookings,
  getBooking,
  getCheckoutSession,
  getSessionUserDetails,
  updateBooking,
} from "../controllers/bookingController.js";
// import { updateOne } from "../controllers/handlerFactory.js";

const router = express.Router();

router.post("/checkout-session/:tourID", protect, getCheckoutSession);
router.post("/order/success/:session_id", protect, getSessionUserDetails);
router.get("/", protect, getAllBookings);

router.route("/:id").get(getBooking).patch(updateBooking).delete(deleteBooking);
export default router;
