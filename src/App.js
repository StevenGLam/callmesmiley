import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./app.scss";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { MainPage } from "./Components/MainPage";
import { Dance } from "./Components/Pages/DancePage/Dance";
import Social from "./Components/SocialMedia";

let dashboard = () => <div>This is dashboard</div>;

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 500
    };
  }

  render() {
    return (
      <div>
        <MainPage /> <Social />{" "}
      </div>
    );
  }
}

let Routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={App} exact={true} />
      <Route path="/dance" component={Dance} />
    </div>
  </BrowserRouter>
);

export default Routes;
