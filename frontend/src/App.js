import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import TourScreen from "./screens/TourScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import "./index.css";
import "./App.scss";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/tours" component={TourScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/signup" component={RegisterScreen} />
        </main>
      </Router>
    </>
  );
};

export default App;
