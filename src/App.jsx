import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Manufacture from "./pages/Manufacture";
import Products from "./pages/Products";
import Review from "./pages/Review";
import ShopNow from "./pages/ShopNow";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Feature />
      <Manufacture />
      <Products />
      <Review />
      <ShopNow />
      <Footer />
    </>
  );
}

export default App;
