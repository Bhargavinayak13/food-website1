import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
