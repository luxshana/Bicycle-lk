import "./App.css";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./Components/Pages/AboutUs";
import CallToAction from "./Components/Pages/CallToAction";
import ContactUs from "./Components/Pages/ContactUs";
import Testimonials from "./Components/Pages/Testimonials";
import ProductShowcase from "./Components/Pages/ProductShowcase";
import Welcome from "./Components/Pages/Welcome";
import Nav from "./Components/Nav";
function App() {
  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Welcome />
        <AboutUs />
        <ProductShowcase />
        <CallToAction />
        <ContactUs />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
