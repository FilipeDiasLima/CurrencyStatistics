import React from "react";
import { Switch, Route } from "react-router-dom";

import StatisticsPage from "../pages/StatisticsPage";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/statistics" exact component={StatisticsPage} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/settings" exact />
  </Switch>
);

export default Routes;
