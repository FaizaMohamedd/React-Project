import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Doctors from "./component/Doctors";
import Blogs from "./component/Blogs";
import Footer from "./component/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<About />} />
          <Route path="/destination" element={<Services />} />
          <Route path="/about" element={<Doctors />} />
          <Route path="/contact" element={<Blogs />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;