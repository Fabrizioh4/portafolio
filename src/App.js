import React,{useState,useEffect} from 'react';
import './App.css';
import Cover from './component/cover/Cover.js';
import Navbar from './component/navbar/Navbar.js';
import About from './component/about/About.js';
import Slider from './component/slider/Slider.js';
import Info from './component/info/Info.js';
import Footer from './component/footer/Footer.js';
import Gmail from './component/gmail/Gmail.js';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  const [scrollHeight,setScrollHeight]=useState(0); 

  const handleScroll = () =>{
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() =>{
    window.addEventListener("scroll",handleScroll);
  },[scrollHeight]);

  return (
    <Router>
        <div className="App">

          <Route exact path="/">
            <Navbar isScrolling={scrollHeight}/>
            <Cover/>
            <About/>
            <Slider/>
            <Info/>
            <Footer/>
          </Route>
        </div>

          <Route path="/contact-me">
            <Gmail/>      
          </Route>
    </Router>

  );
}

export default App;
