import React from "react";
import router from "../src/MockData/router";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {router.map((router) => (
        <React.Fragment key={router.path}>
          <Route path={`${router.path}`} element={router.component} />
        </React.Fragment>
      ))}
    </Routes>
  );
}

export default App;
