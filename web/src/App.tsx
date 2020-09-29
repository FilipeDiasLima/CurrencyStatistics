import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import SideBar from "./components/SideBar";

import GlobalStyles from "./styles/global";
import Routes from "./routes";

const App: React.FC = () => (
  <>
    <Router>
      <SideBar />
      <Routes />
    </Router>
    <GlobalStyles />
  </>
);

export default App;
