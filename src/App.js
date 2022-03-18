import React from "react";
import "./index.css";

import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Test from "./Test";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/movie/:id/:name" component={Test} />
      </Switch>
    </>
  );
};

export default App;
