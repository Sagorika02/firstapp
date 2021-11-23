import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Header title="React Js" />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
