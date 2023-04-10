import React from "react";

import { Header, ToDos } from "./components";

const App = () => {
  return (
    <div className="min-h-screen bg-azure duration-200 selection:bg-keppel dark:bg-gunmetal">
      <Header />
      <ToDos />
    </div>
  );
};

export default App;
