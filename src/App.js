
//import './App.css';

import Blog from "./components/Blogs/Blog";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import Home from "./components/Home/Home";
import Idea from "./components/Ideas/Idea";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/offer/Offer";
import Price from "./components/Price/Price";
import Project from "./components/Projects/Project";
import Services from "./components/Services/Services";
import Slider from "./components/Slider/Slider";
import Team from "./components/Team/Team";
import Technology from "./components/Technologies/Technology";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Hero /> */}
      <Offer/>
      <Idea />
      <Technology/>
      <Project/>
      <Features />
      <Services/>
      <Price/>
      <Team />
      <Blog/>
      <Footer/>
      {/* <Slider/> */}
    </div>
  );
}

export default App;
