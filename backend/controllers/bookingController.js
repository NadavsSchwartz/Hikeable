/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/prefer-default-export
import Stripe from "stripe";
import Booking from "../models/bookingModel.js";
import User from "../models/userModel.js";
import Tour from "../models/tourModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./handlerFactory.js";
export const getCheckoutSession = catchAsync(async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const tour = await Tour.findById(req.params.tourID);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    // success_url: `${req.protocol}://${req.get("host")}/`,
    success_url: `${req.protocol}://localhost:3001/success`,
    cancel_url: `${req.protocol}://${req.get("host")}/tour/${tour.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourID,
    line_items: [
      {
        name: `${tour.name} Tour`,
        description: tour.summary,
        images: [
          `${req.protocol}://${req.get("host")}/img/tours/${tour.imageCover}`,
        ],
        amount: tour.price * 100,
        currency: "usd",
        quantity: 1,
      },
    ],
  });

  res.status(200).json({
    status: "success",
    data: { session },
  });
});

export const createBookingCheckout = async (session) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const tour = session.client_reference_id;
  const user = (await User.findOne({ email: session.customer_email })).id;
  const price = session.display_items[0].amount / 100;
  await Booking.create({ tour, user, price });
};

export const getSessionUserDetails = catchAsync(async (req, res) => {
  await createBookingCheckout(req.params.session_id);
  // createBookingCheckout(sessionID);
  res.json({ message: `Thanks for your order,! ${req.user.name}` });
});

export const webhookCheckout = (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let event;
  try {
    const signature = req.headers["stripe-signature"];
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.TRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return res.status(400).send(`webhook error: ${error.message}`);
  }
  if ((event.type = "checkout.session.completed"))
    createBookingCheckout(event.data.object);
  res.status(200).json({ received: true });
};

export const createBooking = createOne(Booking);
export const getBooking = getOne(Booking);
export const getAllBookings = getAll(Booking);
export const updateBooking = updateOne(Booking);
export const deleteBooking = deleteOne(Booking);
