import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css';
import { useState, useEffect } from "react";


import Navigation from './components/navigation/navigation.component';
import GalleryPage from './pages/gallery/gallery.component'
import Homepage from './pages/homepage/homepage.component'
import Footer from './components/footer/footer.component';
import FaqPage from './pages/faq/faq.component';
import ContactPage from './pages/contact/contact.component';
import ArrangePage from './pages/arrange/arrange.component';
import AdminPage from './pages/admin-page/admin-page.component';
import MobileNavigation from './components/mobile-navigation/mobile-navigation.component';




const App = () => {
  const size = useWindowSize();
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

    return (
      <div>
        <Navigation />
          <Switch>
              <Route exact path='/about' component={GalleryPage} />
              <Route exact path='/admin' component={AdminPage} />
              <Route exact path='/arrange' component={ArrangePage} />
              <Route exact path='/faq' component={FaqPage} />
              <Route exact path='/contact' component={ContactPage} />
              <Route exact path='/gallery' component={GalleryPage} />
              <Route path='/' component={Homepage} />
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





export default App;
