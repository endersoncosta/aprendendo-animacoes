import React from "react";
import { Switch, Route } from "react-router-dom";

import Simples from "./Pages/Simples/Simples";
import Complexa from "./Pages/Complexa/Complexa";

function Routes() {
  return (
    <Switch>
      <Route path={["/", "/1"]} exact>
        <Simples />
      </Route>
      
      <Route path="/2" exact>
        <Complexa />
      </Route>
    </Switch>
  );
}

export default Routes;
