import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'

import './App.css';
import { useState, useEffect } from "react";

import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import GalleryPage from './pages/gallery/gallery.component'
import Footer from './components/footer/footer.component';
import FaqPage from './pages/faq/faq.component';
import ContactPage from './pages/contact/contact.component';
import PricingPage from './pages/pricing/pricing.component';
import MobileNavigation from './components/mobile-navigation/mobile-navigation.component';


function App() {
  const size = useWindowSize();
  return (
    <div>
      <Navigation />
      <HashRouter basename='/'>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/gallery' component={GalleryPage} />
            <Route exact path='/about' component={GalleryPage} />
            <Route exact path='/arrange' component={GalleryPage} />
            <Route exact path='/pricing' component={PricingPage} />
            <Route exact path='/faq' component={FaqPage} />
            <Route exact path='/contact' component={ContactPage} />
        </Switch>
      </HashRouter>
      {
        size.width <= 900 ?
        (<MobileNavigation/>)
        :
        (<Footer />)
      }
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default App;
