import React from 'react'
import { Switch, Route} from 'react-router-dom'

import './App.css';
import { useState, useEffect } from "react";


import Navigation from './components/navigation/navigation.component';
import GalleryPage from './pages/gallery/gallery.component'
import Footer from './components/footer/footer.component';
import FaqPage from './pages/faq/faq.component';
import ContactPage from './pages/contact/contact.component';
import ArrangePage from './pages/arrange/arrange.component';
import MobileNavigation from './components/mobile-navigation/mobile-navigation.component';




function App() {
  const size = useWindowSize();

  return (
    <div>
      <Navigation />
      
        <Switch>
            <Route exact path='/about' component={GalleryPage} />
            <Route exact path='/arrange' component={ArrangePage} />
            <Route exact path='/faq' component={FaqPage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route path='/' component={GalleryPage} />
        </Switch>
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
