import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AllTourScreen from "./screens/AllTourScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import "./index.css";
import "./App.scss";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TourDetailScreen from "./screens/TourDetailScreen";
import Footer from "./components/Footer";
import BookScreen from "./screens/BookScreen";
import TourReviewsScreen from "./screens/TourReviewsScreen";
import SuccessScreen from "./screens/SuccessScreen";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/tours/:id/book" component={BookScreen} />
          <Route path="/tours/:id/reviews" component={TourReviewsScreen} />
          <Route path="/tours/:id" component={TourDetailScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/tours" component={AllTourScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/signup" component={RegisterScreen} />
          <Route path="/success" component={SuccessScreen} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
