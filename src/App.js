import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import history from './Components/History/History';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
