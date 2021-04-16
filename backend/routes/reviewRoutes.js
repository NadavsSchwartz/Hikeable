import express from 'express';
import { protect, restrictTo } from '../controllers/authController.js';
import { updateOne } from '../controllers/handlerFactory.js';
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReview,
  setTourAndUserIds,
} from '../controllers/reviewController.js';

const router = express.Router({ mergeParams: true });
router.use(protect);

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), setTourAndUserIds, createReview);

router
  .route('/:id')
  .get(getReview)
  .delete(restrictTo('admin', 'user'), deleteReview)
  .patch(restrictTo('admin', 'user'), updateOne);

export default router;
