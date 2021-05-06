import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AllTourScreen from "./screens/AllTourScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import "./index.css";
import "./App.scss";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TourDetailScreen from "./screens/TourDetailScreen";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Route path="/tours/:id" component={TourDetailScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/tours" component={AllTourScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/signup" component={RegisterScreen} />
        </main>
      </Router>
    </>
  );
};

export default App;
