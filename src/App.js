import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Presentation from "./Components/Presentation";
import aboutimage from "./images/Frame 19.png";
import aboutimage2 from "./images/download.jpg";
import Contact from "./Components/Contact";
import aboutimage3 from "./images/advance_feature_img.png"
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <Presentation abt='About us' />
      <About img={aboutimage} title='Various resources' desc='UdyamWell is an edtech platform that provides a wealth of resources to help entrepreneurs and business owners.' btn='Read More' />
      <About img={aboutimage2} title='Learn with love and laughter' desc='UdyamWell provides personalized handholding support to help you through every stage of your business journey. We have a vast network of partners to help you with a range of services.' btn='Read more' />
      <Presentation abt='Advanced Features' />
      <About img={aboutimage3} title='Our Advance Educator Learning System' desc='UdyamWell is a Learning Platform especially designed for people from rural background to help them in growing their business and network. Learn Anywhere
      You can be at any part of the world and we will be ensuring that ypu recieves right information and guidance at your own convienient time.' btn='View Course'/>
      <Testimonials/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
