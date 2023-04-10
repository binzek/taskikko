import React from "react";

import { Footer, Header, ToDos } from "./components";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-azure duration-200 selection:bg-keppel dark:bg-gunmetal">
      <Header />
      <ToDos />
      <Footer />
    </div>
  );
};

export default App;
