import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { bookingReducer } from "./reducers/bookingReducers";
import {
  getTopToursReducer,
  getTourDetailsReducer,
  getToursReducer,
  tourReviewCreateReducer,
} from "./reducers/tourReducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  topTours: getTopToursReducer,
  toursInfo: getToursReducer,
  tourDetails: getTourDetailsReducer,
  tourReviewCreate: tourReviewCreateReducer,
  tourBooking: bookingReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
