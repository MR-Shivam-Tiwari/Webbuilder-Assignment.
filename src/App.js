import React from "react";
import "./tailwind.css";
import Navbar from "./Components/Navbar";
import MainComponent from "./Components/MainComponent";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="">
      <Navbar />
      <MainComponent />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
